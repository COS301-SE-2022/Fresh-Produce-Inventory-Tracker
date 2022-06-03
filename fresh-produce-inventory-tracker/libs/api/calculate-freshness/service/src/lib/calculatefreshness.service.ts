import { Injectable, UploadedFile } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
import sharp = require('sharp');
import Jimp = require('jimp');
import tfnode = require('@tensorflow/tfjs-node');


//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class calculatefreshnessService {
  //constructor() {}
  async predict(file) {
    const model = await tf.loadLayersModel('file://./libs/api/calculate-freshness/service/src/lib/model/apple-model/model.json');
    const imagePath = file.path;
    const image = fs.readFileSync(imagePath);
    tf.tidy(() => {
      const imagetensor = tfnode.node.decodeImage(image,3);
      const im = tf.image.resizeBilinear(imagetensor,[180,180]);
      const prediction =  model.predict(im.reshape([1,180,180,3])); 
      console.log(prediction.toString());
      return(prediction.toString());

    })

    

  return {type: 'fresh apple',
            convidence: 0.50
            };

  } 
}