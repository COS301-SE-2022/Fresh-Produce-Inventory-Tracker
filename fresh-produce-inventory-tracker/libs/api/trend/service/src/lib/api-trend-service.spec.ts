import { Test } from '@nestjs/testing';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendRepository } from '../../../repository/src/lib/trend.repository';
import { TrendService } from './trend.service';

class trend {
    id: number;
    userId: number;
    ProduceType: string;
    createdAt: Date;
    updatedAt: Date;
}

var trendDataObj = {
    id: 1,
    userId: 1,
    producetype: 'apple'
}

const d: Date = new Date(2022, 6, 3);
let weekday: Prisma.EnumWeekdaysNullableFilter;

const MockTrend: jest.Mocked<trend> = new trend() as trend;

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
        weekday = { equals: 'monday' }
        expect(await data.getTrendsForDayAndItem(1, 'apple', weekday)).toBe(MockTrend);
    });

    it('it should get all trends for day', async () => {
        jest
            .spyOn(data, 'getTrendsAllTrendsForDay')
            .mockImplementation(
                () => Promise.resolve(MockTrend)
            );
        expect(await data.getTrendsAllTrendsForDay(1, 'Monday')).toBe(MockTrend);
    });

    it('it should update trend', async () => {
        jest
            .spyOn(data, 'updateTrend')
            .mockImplementation(
                () => Promise.resolve(MockTrend)
            );
        expect(await data.updateTrend(1, 1)).toBe(MockTrend);
    });

    it('it should delete all scale trend data', async () => {
        jest
            .spyOn(data, 'deleteAllScaleTrendData')
            .mockImplementation(
                () => Promise.resolve(MockTrend)
            );
        expect(await data.deleteAllScaleTrendData(1, 'apple', d, 1)).toBe(MockTrend);
    });
});

