import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';

@Injectable()
export class AuthenicationRepository {
  constructor(private prisma: PrismaService) { }
  async getUser(@Param('id') email: string) {
    return await this.prisma.user.findUnique({ where: { email: email } });
  }
  async createUser(email: string, password: string, salt: string, name: string, surname: string) {
    return await this.prisma.user.create({
      data: { email: email, password: password, passwordSalt: salt, Name: name, Surname: surname }
    });
  }
  async editUser(id: number, data) {
    return await this.prisma.user.update({ where: { id: id }, data: data });
  }
  async delete(email:string) {
    return await this.prisma.user.delete({ where: { email:email} });
  }
}
