import { Module } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/shared/src/lib/prismaService.service";

import { tasksRepository } from '../../../repository/src/lib/api-tasks-repository';
import { taskService } from '../../../service/src/lib/taskService.service';
import { tasksController } from "./tasks.controller";


@Module({
    imports:[],
  controllers: [tasksController],
  providers: [taskService,tasksRepository,PrismaService]
})
export class ApiAuthenticationApiModule {}
