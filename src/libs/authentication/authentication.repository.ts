import { Injectable, Param } from '@nestjs/common';
import { identity } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthenicationRepository {
    constructor(private prisma:PrismaService){}
    async getUser(@Param('id') id:number)
    {
        return await this.prisma.user.findUnique({where:{id:id}});
    }
    async createUser(email:string,password:string,salt:string)
    {
        return await this.prisma.user.create({data:{email:email,password:password,passwordSalt:salt}});
    }
    async editUser(id:number,data)
    {
        return await this.prisma.user.update({where:{id:id},data:data});
    }
}