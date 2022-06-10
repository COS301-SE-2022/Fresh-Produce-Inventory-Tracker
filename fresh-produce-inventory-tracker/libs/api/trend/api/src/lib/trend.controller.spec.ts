import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendRepository } from '../../../repository/src/lib/trend.repository';
import { TrendService } from '../../../service/src/lib/trend.service';
import { Trendcontroller } from './trend.controller';
import { Request } from 'express';
import { Prisma, Weekdays } from '@prisma/client';

class trend {
    id: number;
    userId: number;
    ProduceType: string;
    Day: Weekdays;
    AverageSalesAmount: number;
    AmountSales: number;
    SaleDate: Date;
    LastRestock: Date;
}

const MockApiImpl: jest.Mocked<trend> = new trend() as trend;
describe('Trend Controller tests', () => {
    let controller: Trendcontroller;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [Trendcontroller],
            providers: [trendRepository, PrismaService, TrendService],
        }).compile();

        controller = module.get<Trendcontroller>(Trendcontroller);
    });

    it('should get trend for an item', async () => {
        jest
            .spyOn(controller, 'getTrendsForItem')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );
        //const req = MockRequest.;
        expect(
            await controller.getTrendsForItem(1, "apple")
        ).toBe(MockApiImpl);
    });
    it('should get trends for day and item', async () => {
        jest
            .spyOn(controller, 'getTrendsForDayAndItem')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await controller.getTrendsForDayAndItem(1, "apple", "Monday")
        ).toBe(MockApiImpl);
    });
    it('should get trends for all days', async () => {
        jest
            .spyOn(controller, 'getTrendsAllTrendsForDay')
            .mockImplementation(
                () => Promise.resolve([MockApiImpl])
            );

        expect(
            await controller.getTrendsAllTrendsForDay(1, "Monday")
        ).toStrictEqual([MockApiImpl]);
    });
    
    it('should get all trends for person', async () => {
        jest
            .spyOn(controller, 'getAll')
            .mockImplementation(
                () => Promise.resolve([MockApiImpl])
            );

        expect(
            await controller.getAll(1)
        ).toStrictEqual([MockApiImpl]);

    });
});

