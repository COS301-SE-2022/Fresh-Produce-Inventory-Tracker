import { Module } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/shared/src/lib/prismaService.service";

import { tasksRepository } from '../../../repository/src/lib/api-tasks-repository.repository';
import { taskService } from '../../../service/src/lib/taskService.service';
import { tasksController } from "./tasks.controller";
import { ApiNotificationsApiModule } from "../../../../notifications/api/src/lib/api-notifications-api.module";


@Module({
    imports:[ApiNotificationsApiModule],
  controllers: [tasksController],
  providers: [taskService,tasksRepository,PrismaService],
  exports: [taskService]
})
export class tasksModule {}
