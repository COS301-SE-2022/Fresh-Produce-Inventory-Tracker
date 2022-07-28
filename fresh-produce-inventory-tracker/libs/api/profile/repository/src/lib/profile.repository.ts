// import { data } from './../../../../../../apps/client/src/components/trends/index';
import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';

@Injectable()
export class profileRepository {
  constructor(private prisma: PrismaService) { }
  async getprofile(id: number) {
    return this.prisma.user.findFirst({
      where: { id: +id },
      select: {
        Bio: true,
        Name: true,
        Surname: true,
        createdAt: true,
        email: true,
        updatedAt: true,
      }
    });
  }

  async editProfile(id: number, data: {
    Name: string,
    Surname: string,
    Bio: string,
  }) {
    return this.prisma.user.update({
      where: {
        id: +id,
      },
      data,
      select: {
        id: true,
        Name: true,
        Surname: true,
        updatedAt: true,
        Bio: true,
      }
    })
  }

  async editName(id: number, name: string) {
    return await this.prisma.user.update({
      where: { id: +id }, data: { Name: name }
    });
  }
  async editSurname(id: number, surname: string) {
    return await this.prisma.user.update({
      where: { id: +id }, data: { Surname: surname }
    });
  }
  async editBio(id: number, bio: string) {
    return await this.prisma.user.update({
      where: { id: +id }, data: { Bio: bio }
    });
  }
  async editVisibility(id: number, visibility: string) {
    let check = false;
    if (visibility == "true") {
      check = true;
    }
    return await this.prisma.user.update({
      where: { id: +id }, data: { Visibility: check }
    });
  }

  async deleteName(id: number) {
    return await this.prisma.user.update({
      where: { id: +id }, data: { Name: '' }
    });

  }
  async deleteSurname(id: number) {
    return await this.prisma.user.update({
      where: { id: +id }, data: { Surname: '' }
    });
  }
  async deleteBio(id: number) {
    return await this.prisma.user.update({
      where: { id: +id }, data: { Bio: '' }
    });
  }
  async deleteVisibility(id: number) {
    return await this.prisma.user.update({
      where: { id: +id }, data: { Visibility: false }
    });
  }
}