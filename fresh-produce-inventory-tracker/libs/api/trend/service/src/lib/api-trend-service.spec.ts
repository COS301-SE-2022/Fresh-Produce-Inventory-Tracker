import { Test } from '@nestjs/testing';
import { Prisma, Weekdays } from '@prisma/client';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendRepository } from '../../../repository/src/lib/trend.repository';
import { TrendService } from './trend.service';

class Trend {
    id: number;
    userId: number;
    ProduceType: string;
    Day: Weekdays;
    AverageSalesAmount: number;
    AmountSales: number;
}

/*var trendDataObj = {
    id: 1,
    userId: 1,
    producetype: 'apple'
}*/
class Count {
    count: number;
}

const d: Date = new Date(2022, 6, 3);

const MockTrend: jest.Mocked<Trend> = new Trend() as Trend;
const Mockcount: jest.Mocked<Count> = new Count() as Count;
describe('Trend Service Test', () => {
    let data: TrendService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [],
            providers: [TrendService, trendRepository, PrismaService],
        }).compile();
        data = moduleRef.get<TrendService>(TrendService);
    });

    it('should get trends for item', async () => {
        jest
            .spyOn(data, 'getTrendsForItem')
            .mockImplementation(
                () => Promise.resolve(MockTrend)
            );
        expect(await data.getTrendsForItem(1, 'apple')).toBe(MockTrend);
    });

    it('it should get trends for day and item', async () => {
        jest
            .spyOn(data, 'getTrendsForDayAndItem')
            .mockImplementation(
                () => Promise.resolve(MockTrend)
            );

        expect(await data.getTrendsForDayAndItem(1, 'apple', 'Monday')).toBe(MockTrend);
    });

    it('it should get all trends for day', async () => {
        jest
            .spyOn(data, 'getTrendsAllTrendsForDay')
            .mockImplementation(
                () => Promise.resolve([MockTrend])
            );
        expect(await data.getTrendsAllTrendsForDay(1, 'Monday')).toStrictEqual([MockTrend]);
    });

    it('it should update trend', async () => {
        jest
            .spyOn(data, 'updateTrend')
            .mockImplementation(
                () => Promise.resolve(Mockcount)
            );
        expect(await data.updateTrend(1, 1)).toBe(Mockcount);
    });

    it('it should delete all scale trend data', async () => {
        jest
            .spyOn(data, 'deleteAllScaleTrendData')
            .mockImplementation(
                () => Promise.resolve(Mockcount)
            );
        expect(await data.deleteAllScaleTrendData(1, 'apple', d, 1)).toBe(Mockcount);
    });
});