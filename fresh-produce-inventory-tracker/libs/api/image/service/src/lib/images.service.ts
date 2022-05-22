import { Injectable } from '@nestjs/common';
import {ImagesRepository} from '../../../repository/src/lib/images.repository';

@Injectable()
export class ImagesService {
    constructor(private repo:ImagesRepository){}
    async uploadfile(user,filename:string){
        return await this.repo.createImage(user.id,filename);
    }
}
