package com.mycompany.scalereader;

import java.util.logging.Level;
import java.util.logging.Logger;
import jssc.SerialPort;
import java.net.*;
import java.io.*;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.stream.Collectors;
import jssc.SerialPortEvent;
import jssc.SerialPortEventListener;
import jssc.SerialPortException;

public class main {
    static SerialPort serialPort = new SerialPort("/dev/ttyACM1");
    
    static int weight = 10;
    
    public static void main(String[] args) {
        
        try {
            serialPort.openPort();

            serialPort.setParams(SerialPort.BAUDRATE_38400,
                                 SerialPort.DATABITS_8,
                                 SerialPort.STOPBITS_1,
                                 SerialPort.PARITY_NONE);

            serialPort.setFlowControlMode(SerialPort.FLOWCONTROL_RTSCTS_IN | 
                                          SerialPort.FLOWCONTROL_RTSCTS_OUT);

            serialPort.addEventListener( new PortReader(), SerialPort.MASK_RXCHAR);
            
          
            
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
                    
                    //if(!receivedData.contains("-")  && receivedData.length() == (weight+"").length()+1 && receivedData.length() == (weight+"").length()+1  && receivedData.length() == (weight+"").length())
                    
                    if(receivedData.charAt(0) == '(' && receivedData.charAt(receivedData.length()-1) == ')')
                    {
                        System.out.println("boii");
                        receivedData = receivedData.substring(1, receivedData.length()-1);
                        //if(Integer.parseInt(receivedData) == (weight-1) || Integer.parseInt(receivedData) == (weight-2) || Integer.parseInt(receivedData) == (weight+1) || Integer.parseInt(receivedData) == (weight+2))
                        if(true)
                        {
                            weight = Integer.parseInt(receivedData);
                            
                            HashMap<String, String> parameters = new HashMap<>();
                            

                            parameters.put("id", "17");
                            parameters.put("userid", "1");
                            parameters.put("weight", weight+"");

                            String form = parameters.entrySet()
                                .stream()
                                .map(e -> e.getKey() + "=" + URLEncoder.encode(e.getValue(), StandardCharsets.UTF_8))
                                    .collect(Collectors.joining("&"));

                            HttpClient client = HttpClient.newHttpClient();
                            HttpRequest request = HttpRequest.newBuilder()
                                    
                                    .uri(URI.create("http://13.244.78.12:3333/api/scale/editscale?id=12&userid=1&weight=" + weight))
                                    .header("Content-Type", "application/x-www-form-urlencoded")
                                    .POST(HttpRequest.BodyPublishers.ofString(form))
                                    .build();

                            HttpResponse<String> response = client.send(request,HttpResponse.BodyHandlers.ofString());
                            

                            System.out.println(response.body());
                        }
                    }
                }
                catch (SerialPortException ex) {
                    System.out.println("Error in receiving string from COM-port: " + ex);
                }
                catch (InterruptedException | IOException ex)
                {
                    Logger.getLogger(main.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            else
            {
                
            }
        }
    }
}
