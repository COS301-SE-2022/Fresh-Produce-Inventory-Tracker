import { Injectable, UploadedFile } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
import sharp = require('sharp');
import Jimp = require('jimp');
import tfnode = require('@tensorflow/tfjs-node');
import { min } from 'rxjs';
import {taskService} from '../../../../tasks/service/src/lib/taskService.service'


//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class calculatefreshnessService {
  constructor(private taskService:taskService) {}
  async predict(id:number,file) {
    const model = await tf.loadLayersModel('file://./libs/api/calculate-freshness/service/src/lib/model/apple-model/model.json');
    const imagePath = file.path;
    const image = fs.readFileSync(imagePath);
    const imagetensor = tfnode.node.decodeImage(image,3);
    const im = tf.image.resizeBilinear(imagetensor,[180,180]);
    const prediction =  (model.predict(im.reshape([1,180,180,3])) as tf.Tensor ); 
    const result = prediction.dataSync()
    //console.log( prediction.dataSync());
    let max = 0;
    for(let i = 0; i < result.length;i++)
    {
      if(result[max] < result[i])
      {
        max = i;
      }

    }
      
    //getproduce(max,result)
    
    const answer = this.getproduce(max,result);
    if(answer.prediction.includes('rotten'))
    {
      
      const message = 'Please remove all '+ answer.prediction;
      if((await this.taskService.getTasksMessage(id,message)).message != message)
      {
        await this.taskService.createTask(id,message);
      }
        
    }
    return answer;


  } 
  getproduce(num:number,arr)
  {
    let other = 0;
    if(num % 2== 0)
    {
      other= num+1;
    }
    else{
      other = num-1;
    }
    const total = Math.abs(arr[num]) + Math.abs(arr[other]);
    const convidence = arr[num]/total*100;
    const result = this.getType(num);
    if(Math.abs(arr[num] - arr[other]) < 1)
    {
      return {
        prediction: result,
        message: 'bad looking produce',
        convidence: convidence
      }
    }
    else{
      return {
        prediction: result,
        message: result,
        convidence: convidence
      }
    }

  }
  getType(num:number)
  {
    switch(num){
      case 0: return 'rotten apple';
      case 1: return 'fresh apple';
    }
  }

}