import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { tasksRepository } from '../../../repository/src/lib/api-tasks-repository.repository';
import { taskService } from '../../../service/src/lib/taskService.service';
import { tasksController } from './tasks.controller';

class Notification {
    id!: number;
    userId!: number;
    Type!: string;
    message!: string;
}
class payload{
    count !: number;
}

const MockApiImpl: jest.Mocked<Notification> = new Notification() as Notification;
const MockPayload: jest.Mocked<payload> = new payload() as payload;
describe('Trend Controller tests', () => {
    let controller: tasksController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [tasksController],
            providers: [tasksRepository, PrismaService, taskService],
        }).compile();

        controller = module.get<tasksController>(tasksController);
    });

    it('should get tasks', async () => {
        jest
            .spyOn(controller, 'getTasks')
            .mockImplementation(
                () => Promise.resolve([MockApiImpl])
            );
        //const req = MockRequest.;
        expect(
            await controller.getTasks(1)
        ).toStrictEqual([MockApiImpl]);
    });
    it('should create task', async () => {
        jest
            .spyOn(controller, 'createTasks')
            .mockImplementation(
                (): Promise<Notification | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await controller.createTasks(1, "message")
        ).toBe(MockApiImpl);
    });
    it('should delete task', async () => {
        jest
            .spyOn(controller, 'deleteTasks')
            .mockImplementation(
                () => Promise.resolve(MockPayload)
            );

        expect(
            await controller.deleteTasks(1, "message")
        ).toBe(MockPayload);
    });
});

