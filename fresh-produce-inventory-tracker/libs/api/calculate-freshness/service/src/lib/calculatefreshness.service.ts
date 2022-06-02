import { Injectable, UploadedFile } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as tf from '@tensorflow/tfjs';
import sharp = require('sharp');

//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class calculatefreshnessService {
  //constructor() {}
  async predict(@UploadedFile() file) {
    console.log('here')
    const model = await tf.loadLayersModel('localstorage://my-model-1');
    console.log('here')
    const image = sharp(file).resize(180,180).png();
    const prediction = await model.predict(file);
    console.log(prediction);
  }
}