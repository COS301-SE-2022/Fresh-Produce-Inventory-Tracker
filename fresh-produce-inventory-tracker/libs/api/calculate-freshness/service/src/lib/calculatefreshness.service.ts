import { Injectable, UploadedFile } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as tf from '@tensorflow/tfjs';
import sharp = require('sharp');
import Jimp = require('jimp');
require('@tensorflow/tfjs-node');
import fs = require('fs');

//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class calculatefreshnessService {
  //constructor() {}
  async predict(file) {
    const model = await tf.loadLayersModel('file://./libs/api/calculate-freshness/service/src/lib/model/apple-model/model.json');
    
    
    // Draw image data to the canvas
    fs.readFile(file.path, async function(err, data) {
        //console.log(data);
        const imageData = new ImageData(new Uint8ClampedArray(data),180, 180);
        
        const a = await tf.browser.fromPixels(imageData)
        console.log(a);
    });
    //const a = tf.browser.fromPixels(image)
   
    //console.log(image)

  return {type: 'fresh apple',
            convidence: 0.50
            };

  } 
}