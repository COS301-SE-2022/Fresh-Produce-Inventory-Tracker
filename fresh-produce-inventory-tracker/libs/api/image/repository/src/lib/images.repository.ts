import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ImagesRepository {
    constructor(private prisma:PrismaService){}
    async upload(id:number,imageUrl:string)
    {
        return await this.prisma.image.create({data:{userId:id,imageUrl:imageUrl}});
    }

}