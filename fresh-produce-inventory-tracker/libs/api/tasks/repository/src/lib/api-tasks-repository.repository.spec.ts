import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { tasksRepository } from './api-tasks-repository.repository';
import { Request } from 'express';
import { Prisma, Weekdays } from '@prisma/client';

class Notification{
  id!: number;
  userId!:number;
  Type!:string;
  message!:string;
  
}
class batch{
  count!:number
  
}

const MockApiImpl : jest.Mocked<Notification> = new Notification() as Notification;
const MockCount : jest.Mocked<batch> = new batch() as batch;
describe('Trend Controller tests', () => {
  let controller: tasksRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [tasksRepository, PrismaService],
    }).compile();

    controller = module.get<tasksRepository>(tasksRepository);
  });

  it('should get tasks', async () => {
    jest
      .spyOn(controller, 'getTasks')
      .mockImplementation(
        (): Promise<Notification[]> => Promise.resolve([MockApiImpl])
      );
    //const req = MockRequest.;
    expect(
      await controller.getTasks(1)
    ).toStrictEqual([MockApiImpl]);
  });
  it('should get task message', async () => {
    jest
      .spyOn(controller, 'getTasksMessage')
      .mockImplementation(
        (): Promise<Notification | null> => Promise.resolve(MockApiImpl)
      );

    expect(
      await controller.getTasksMessage(1, "message")
    ).toBe(MockApiImpl);
  });
  it('should create task', async () => {
    jest
      .spyOn(controller, 'createTask')
      .mockImplementation(
        (): Promise<Notification | null> => Promise.resolve(MockApiImpl)
      );

    expect(
      await controller.createTask(1, "message")
    ).toBe(MockApiImpl);
  });
  it('should delete task', async () => {
    jest
      .spyOn(controller, 'deleteTask')
      .mockImplementation(
        () => Promise.resolve(MockCount)
      );

    expect(
      await controller.deleteTask(1, "message")
    ).toBe(MockCount);
  });
});

