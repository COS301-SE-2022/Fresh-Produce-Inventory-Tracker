//Calibration = 23.00 BoardName = ACM1 Scale 0 Baud = 57600
#include <HX711_ADC.h>
#if defined(ESP8266)|| defined(ESP32) || defined(AVR)
#include <EEPROM.h>
#endif

//pins:
const int HX711_dout = 4; //mcu > HX711 dout pin
const int HX711_sck = 5; //mcu > HX711 sck pin

//HX711 constructor:
HX711_ADC LoadCell(HX711_dout, HX711_sck);

const int calVal_eepromAdress = 0;
const int tareOffsetVal_eepromAdress = 4;
unsigned long t = 0;
float oldvalue = 0 ;

void setup() {
  Serial.begin(57600); delay(10);

  LoadCell.begin();
  float calibrationValue; // calibration value can be tested with "Calibration.ino" file
  calibrationValue = 23.00; // Tested and pres set for scale 1

#if defined(ESP8266)|| defined(ESP32)
  EEPROM.begin(512);
#endif

 
  //restore the zero offset value from eeprom:
  long tare_offset = 0;
  EEPROM.get(tareOffsetVal_eepromAdress, tare_offset);
  LoadCell.setTareOffset(tare_offset);
  boolean _tare = false; 

  unsigned long stabilizingtime = 2000; // preciscion for power-up stabilization
  LoadCell.start(stabilizingtime, _tare);
  if (LoadCell.getTareTimeoutFlag()) {
    Serial.println("Error : Timeout, check MCU>HX711 wiring and pin designations"); //if pin connections is faulty
    while (1);
  }
  else {
    LoadCell.setCalFactor(calibrationValue); // set calibration value (float)
  }
}

void loop() {
  static boolean newDataReady = 0;
  const int serialPrintInterval = 10000; //send value every 10s to to update DB

  // check for weight changes
  if (LoadCell.update()) newDataReady = true;

  
  if (newDataReady) {
    float i = LoadCell.getData();
    if (millis() > t + serialPrintInterval ||i<oldvalue-100 || i>oldvalue+100) { //
      Serial.println('('+i+')'); //gives output
      oldvalue = i;
      newDataReady = 0;
      t = millis();
    }
  }

  // receive command from serial terminal, send 't' to initiate tare operation:
  if (Serial.available() > 0) {
    char inByte = Serial.read();
    if (inByte == 't') refreshOffsetValueAndSaveToEEprom();
  }
}


void refreshOffsetValueAndSaveToEEprom() {
  long _offset = 0;
  LoadCell.tare(); // calculate the new tare / zero offset value 
  _offset = LoadCell.getTareOffset(); // get the new tare / zero offset value
  EEPROM.put(tareOffsetVal_eepromAdress, _offset); 
#if defined(ESP8266) || defined(ESP32)
  EEPROM.commit();
#endif
  LoadCell.setTareOffset(_offset); // set value as library parameter (next restart it will be read from EEprom)

}