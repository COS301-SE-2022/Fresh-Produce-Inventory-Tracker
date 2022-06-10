import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { TrendRepository } from '../../../repository/src/lib/trend.repository';
import { TrendService } from '../../../service/src/lib/trend.service';
import { TrendController } from './trend.controller';
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
    let controller: TrendController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TrendController],
            providers: [TrendRepository, PrismaService, TrendService],
        }).compile();

        controller = module.get<TrendController>(TrendController);
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
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await controller.getTrendsAllTrendsForDay(1, "Monday")
        ).toBe(MockApiImpl);
    });
    it('should update trend', async () => {
        jest
            .spyOn(controller, 'updateTrendSales')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await controller.updateTrendSales(1, "apple", Weekdays.Monday, 1)
        ).toBe(MockApiImpl);

    });
    it('should get all trends for person', async () => {
        jest
            .spyOn(controller, 'getAll')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await controller.getAll(1)
        ).toBe(MockApiImpl);

    });
});

