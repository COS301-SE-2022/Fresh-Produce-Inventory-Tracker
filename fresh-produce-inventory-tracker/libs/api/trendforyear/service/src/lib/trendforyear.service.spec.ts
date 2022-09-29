import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendForYearRepository } from '../../../repository/src/lib/trendforyear.repository';
import { TrendForYearService } from './trendforyear.service';
import { Request } from 'express';
import { Prisma, Weekdays } from '@prisma/client';

class trendForYear {
    id: number;
    userId: number;
    ProduceType: string;
    AverageSalesAmountForYear: number[];
    AmountSalesForYear: number[];
    SaleDate: Date;
    LastRestock: Date;
    produceType:string;
    amountSalesForMonth:any;
    averageSalesForMonth:any; 
    dateOfSale:Date;
    lastRestock:Date;
}
class trends {
    id: number;
    produceType:string;
    amountSalesForMonth:number;
    averageSalesForMonth:number; 
    averagesForMonths:any[];
    amountsforMonths:any[];
}

const MockApiImpl: jest.Mocked<trendForYear> = new trendForYear() as trendForYear;
const mockendApi: jest.Mocked<trends> = new trends() as trends;
describe('Trend Controller tests', () => {
    let controller: TrendForYearService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [trendForYearRepository, PrismaService, TrendForYearService],
        }).compile();

        controller = module.get<TrendForYearService>(TrendForYearService);
    });

    it('should get trends for item and month', async () => {
        jest
            .spyOn(controller, 'getTrendsForItemAndMonth')
            .mockImplementation(
                (): Promise<trendForYear | null> => Promise.resolve(MockApiImpl)
            );
        expect(await controller.getTrendsForItemAndMonth(1, 'apple', 1)).toBe(MockApiImpl);
    });

    it('should get month averages', async () => {
        jest
            .spyOn(controller, 'getMonthAverages')
            .mockImplementation(
                () => Promise.resolve(mockendApi)
            );

        expect(await controller.getMonthAverages(1, 'apple')).toBe(
            mockendApi
        );
    });

    it('should get all trends for person', async () => {
        jest
            .spyOn(controller, 'getAll')
            .mockImplementation(() => Promise.resolve([MockApiImpl]));

        expect(await controller.getAll(1)).toStrictEqual([MockApiImpl]);
    });


    it('should update year trends for person', async () => {
        jest
            .spyOn(controller, 'updateYearTrend')
            .mockImplementation(() => Promise.resolve(null));

        expect(
            await controller.updateYearTrend(1, 2)
        ).toStrictEqual(null);
    });

    it('should delete all scale trend data', async () => {
        jest
            .spyOn(controller, 'deleteAllScaleTrendData')
            .mockImplementation(() => Promise.resolve(null));

        expect(await controller.deleteAllScaleTrendData(1, "apple", new Date(), 1)).toBe(null);
    });
});
