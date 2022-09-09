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
    AverageSalesAmountForYear: number;
    AmountSalesForYear: number;
    SaleDate: Date;
    LastRestock: Date;
}

const MockApiImpl: jest.Mocked<trendForYear> = new trendForYear() as trendForYear;
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

});
