import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendForYearRepository } from '../../../repository/src/lib/trendforyear.repository';
import { TrendForYearService } from '../../../service/src/lib/trendforyear.service';
import { TrendForYearcontroller } from './trendforyear.controller';
import { Request } from 'express';
import { Prisma, Weekdays } from '@prisma/client';

class trend {
    id: number;
    userId: number;
    ProduceType: string;
    AverageSalesAmountForYear: number[];
    AmountSalesForYear: number[];
    SaleDate: Date;
    LastRestock: Date;
}
class MonthyReturns {
    id: number;
    produceType: string;
    averagesForMonths: number[];
    amountsforMonths: number[];
}
const MockApiImpl: jest.Mocked<trend> = new trend() as trend;
const MonthyReturnsMock: jest.Mocked<MonthyReturns> = new MonthyReturns() as MonthyReturns;
describe('Trend Controller tests', () => {
    let controller: TrendForYearcontroller;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TrendForYearcontroller],
            providers: [trendForYearRepository, PrismaService, TrendForYearService],
        }).compile();

        controller = module.get<TrendForYearcontroller>(TrendForYearcontroller);
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
    it('should get all trends for months', async () => {
        jest
            .spyOn(controller, 'getMonthAverages')
            .mockImplementation(
                () => Promise.resolve(MonthyReturnsMock)
            );

        expect(
            await controller.getMonthAverages(1,'bread')
        ).toEqual(MonthyReturnsMock);

    });

    it('should not get all trends for months', async () => {
        jest
            .spyOn(controller, 'getMonthAverages')
            .mockImplementation(
                () => Promise.resolve(null)
            );

        expect(
            await controller.getMonthAverages(55,'bread')
        ).toEqual(null);

    });

    it('should not get all trends for months', async () => {
        jest
            .spyOn(controller, 'updateyeartrend')
            .mockImplementation(
                () => Promise.resolve(null)
            );

        expect(
            await controller.updateyeartrend(1,2)
        ).toEqual(null);

    });
    

});