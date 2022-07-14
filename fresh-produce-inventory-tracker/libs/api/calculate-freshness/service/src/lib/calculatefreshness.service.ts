import { Injectable, UploadedFile } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
import tfnode = require('@tensorflow/tfjs-node');
// import { min } from 'rxjs';
import { taskService } from '../../../../tasks/service/src/lib/taskService.service';
import mobilenet = require('@tensorflow-models/mobilenet');

//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class calculatefreshnessService {
  constructor(private taskService: taskService) {}
  async predict(id: number, type: string, file) {
    const model1 = await tf.loadLayersModel(
      'file://./libs/api/calculate-freshness/service/src/lib/model/' +
        type +
        '-model/model.json'
    );
    //const model = await mobilenet.load();
    const imagePath = file.path;
    const image = fs.readFileSync(imagePath);
    const imagetensor = tfnode.node.decodeImage(image, 3);
    const im = tf.image.resizeBilinear(imagetensor, [180, 180]) as tf.Tensor3D;
    //const predictions = await model.classify(im);
    const prediction = model1.predict(
      im.reshape([1, 180, 180, 3])
    ) as tf.Tensor;
    //console.log(predictions);
    const result = prediction.dataSync();
    let max = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[max] < result[i]) {
        max = i;
      }
    }

    this.getproduce(max, result, type);

    const answer = this.getproduce(max, result, type);
    if (answer.prediction.includes('rotten')) {
      const message = 'Please remove all ' + answer.prediction;
      if (
        (await this.taskService.getTasksMessage(id, message)) == null ||
        ((await this.taskService.getTasksMessage(id, message)) != null &&
          (await this.taskService.getTasksMessage(id, message)).message !=
            message)
      ) {
        await this.taskService.createTask(id, message);
      }
    }
    return answer;
  }
  getproduce(num: number, arr, classname: string) {
    let other = 0;
    if (num % 2 == 0) {
      other = num + 1;
    } else {
      other = num - 1;
    }
    const total = Math.abs(arr[num]) + Math.abs(arr[other]);
    const convidence = (arr[num] / total) * 100;
    const result = this.getType(num);
    if (Math.abs(arr[num] - arr[other]) < 1) {
      return {
        prediction: result + ' ' + classname,
        message: 'bad looking produce',
        convidence: convidence,
      };
    } else {
      return {
        prediction: result + ' ' + classname,
        message: result + ' ' + classname,
        convidence: convidence,
      };
    }
  }
  getType(num: number) {
    switch (num) {
      case 0:
        return 'rotten';
      case 1:
        return 'fresh';
    }
  }
}
