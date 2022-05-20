import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';

@Injectable()
export class ImagesRepository {
    constructor(private prisma:PrismaService){}
    async createImage(id:number,imageUrl:string)
    {
        return await this.prisma.image.create({data:{userId:id,imageUrl:imageUrl}});
    }

}