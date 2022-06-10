import { Test } from '@nestjs/testing';
import { Prisma, Weekdays } from '@prisma/client';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { tasksRepository } from '../../../repository/src/lib/api-tasks-repository';
import { taskService } from '../../../service/src/lib/taskService.service';

class Notification {
  id: number;
  userId: number;
  Type: string;
  message: string;
}

const MockTask: jest.Mocked<Notification> = new Notification() as Notification;

describe('Task Service Test', () => {
  let data: taskService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [],
      providers: [taskService, tasksRepository, PrismaService],
    }).compile();
    data = moduleRef.get<taskService>(taskService);
  });

  it('should get tasks', async () => {
    jest
      .spyOn(data, 'getTasks')
      .mockImplementation(
        () => Promise.resolve(MockTask)
      );
    expect(await data.getTasks(1)).toBe(MockTask);
  });

  it('should get task message', async () => {
    jest
      .spyOn(data, 'getTasksMessage')
      .mockImplementation(
        () => Promise.resolve(MockTask)
      );

    expect(await data.getTasksMessage(1, "message")).toBe(MockTask);
  });

  it('should create task', async () => {
    jest
      .spyOn(data, 'createTask')
      .mockImplementation(
        () => Promise.resolve([MockTask])
      );
    expect(await data.createTask(1, "message")).toStrictEqual([MockTask]);
  });

  it('should delete task', async () => {
    jest
      .spyOn(data, 'deleteTasks')
      .mockImplementation(
        () => Promise.resolve(MockTask)
      );
    expect(await data.deleteTasks(1, "message")).toBe(MockTask);
  });
});