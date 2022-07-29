package com.mycompany.scalereader;

import java.util.logging.Level;
import java.util.logging.Logger;
import jssc.*;
import java.net.*;
import java.io.*;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.stream.Collectors;

public class main {
    /*
     * Serial ports will be different for each indevidual system & scale 
     * So Generate code to test in which port scale is 
     */
    static SerialPort serialPort1 = new SerialPort("COM2");
    static SerialPort serialPort2 = new SerialPort("COM4");
    static SerialPort serialPort3 = new SerialPort("COM6");
      static SerialPort serialPort = new SerialPort("COM8");
    static int weight = 10;
    
    public static void main(String[] args) {
        try {
            serialPort.openPort();

            serialPort.setParams(SerialPort.BAUDRATE_9600,
                                 SerialPort.DATABITS_8,
                                 SerialPort.STOPBITS_1,
                                 SerialPort.PARITY_NONE);

            serialPort.setFlowControlMode(SerialPort.FLOWCONTROL_RTSCTS_IN | 
                                          SerialPort.FLOWCONTROL_RTSCTS_OUT);

            serialPort.addEventListener(new PortReader(), SerialPort.MASK_RXCHAR);
            
            
        }
        catch (SerialPortException ex) {
            System.out.println("There are an error on writing string to port т: " + ex);
        }
    }
    
    private static class PortReader implements SerialPortEventListener {

        @Override
        public void serialEvent(SerialPortEvent event) {
            if(event.isRXCHAR() && event.getEventValue() > 0) {
                try {
                    String receivedData = serialPort.readString(event.getEventValue());
                    System.out.println(receivedData);
                    //Look at data length to be able to add more to the scale
                    if(!receivedData.contains("-") && receivedData.length() < 3 && Integer.parseInt(receivedData) != weight && receivedData.length() == (weight+"").length())
                    {
                        if(Integer.parseInt(receivedData) == (weight-1) || Integer.parseInt(receivedData) == (weight-2) || Integer.parseInt(receivedData) == (weight+1) || Integer.parseInt(receivedData) == (weight+2))
                        {
                            weight = Integer.parseInt(receivedData);
                            
                            HashMap<String, String> parameters = new HashMap<>();

                            parameters.put("id", "1");
                            parameters.put("userid", "1");
                            parameters.put("weight", weight+"");

                            String form = parameters.entrySet()
                                .stream()
                                .map(e -> e.getKey() + "=" + URLEncoder.encode(e.getValue(), StandardCharsets.UTF_8))
                                    .collect(Collectors.joining("&"));

                            HttpClient client = HttpClient.newHttpClient();
                            HttpRequest request = HttpRequest.newBuilder()
                                    .uri(URI.create("http://localhost:3333/api/scale/editscale?id=1&userid=1&weight=" + weight))
                                    .header("Content-Type", "application/x-www-form-urlencoded")
                                    .POST(HttpRequest.BodyPublishers.ofString(form))
                                    .build();

                            HttpResponse<String> response = client.send(request,HttpResponse.BodyHandlers.ofString());

                            System.out.println(response.body());
                        }
                    }
                }
                catch (SerialPortException ex) {
                    System.out.println("Error in receiving string from COM-port: " + ex);//err
                }
                catch (InterruptedException | IOException ex)
                {
                    Logger.getLogger(main.class.getName()).log(Level.SEVERE, null, ex);//err
                }
            }
           
        }
    }
  
}
