import { Injectable } from '@nestjs/common';
import {ImagesRepository} from '../../../repository/src/lib/images.repository';
import * as fs from 'fs';
@Injectable()
export class ImagesService {
    constructor(private repo:ImagesRepository){}
    async uploadfile(user,filename:string){
        return await this.repo.createImage(user.id,filename);
    }
    async deletePicture(path: string) {
     await fs.unlink(path, (err) => {
      if (err) {
       console.error(err);
       return err;
      }
     });
    }
}
