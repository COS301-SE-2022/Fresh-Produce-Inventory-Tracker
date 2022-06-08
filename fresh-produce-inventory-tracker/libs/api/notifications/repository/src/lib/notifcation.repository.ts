import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';

@Injectable()
export class NotificationRepository {
  constructor(private prisma: PrismaService) {}
  async getNotifications(id: number) {
    return await this.prisma.notification.findMany({
      where: { userId: +id,Type:{contains:"Notification"}},
    });
  }
  async getNotificationMessage(id: number, message: string) {
    return await this.prisma.notification.findFirst({
      where: { userId: +id,  message: message },
    });
  }
  async createNotification(userid: number, message: string) {
    if (
      !(await this.prisma.notification.findFirst({
        where: { userId: +userid, message: message },
      }))
    ) {
      return await this.prisma.notification.create({
        data: { userId: +userid, Type:"Notification", message: message },
      });
    } else return null;
  }
  async createNotificationUrgent(userid: number, message: string) {
    if (
      !(await this.prisma.notification.findFirst({
        where: { userId: +userid, message: message },
      }))
    ) {
      return await this.prisma.notification.create({
        data: { userId: +userid,Type:"UrgentNotification", message: message },
      });
    } else return null;
  }
  async deleteNotification(userId: number) {
    return await this.prisma.notification.deleteMany({
      where: {Type:{contains:"Notification"}, userId: +userId },
    });
  }
}
