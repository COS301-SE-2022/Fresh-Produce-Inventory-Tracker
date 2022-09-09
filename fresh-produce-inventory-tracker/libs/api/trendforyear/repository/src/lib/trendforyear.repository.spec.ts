import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendForYearRepository } from './trendforyear.repository';
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
class payload {
    count: number;
}
class scaleTrend {
    scale_id: number;
    weight: number[];
    date: Date[];
    id: number;
    ProduceType: string;
}

//const reqMock = jest.mock('./api');

const MockApiImpl: jest.Mocked<trendForYear> = new trendForYear() as trendForYear;
const Mockplayload: jest.Mocked<payload> = new payload() as payload;
const Mocknumber: jest.Mocked<number> = new Number() as number;
const MockScaleTrend: jest.Mocked<scaleTrend> = new scaleTrend() as scaleTrend;

describe('ImagesController', () => {
    let repo: trendForYearRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [],
            providers: [trendForYearRepository, PrismaService],
        }).compile();

        repo = module.get<trendForYearRepository>(trendForYearRepository);
    });

    it('should get trends for an item', async () => {
        jest
            .spyOn(repo, 'getTrendsForItem')
            .mockImplementation(
                (): Promise<trendForYear | null> => Promise.resolve(MockApiImpl)
            );
        //const req = MockRequest.;
        expect(
            await repo.getTrendsForItem(1, "apple")
        ).toBe(MockApiImpl);
    });

    it('should get all trends for person', async () => {
        jest
            .spyOn(repo, 'getAll')
            .mockImplementation(
                () => Promise.resolve([MockApiImpl])
            );

        expect(
            await repo.getAll(1)
        ).toStrictEqual([MockApiImpl]);

    });

    it('should create trend', async () => {
        jest
            .spyOn(repo, 'createTrend')
            .mockImplementation(
                (): Promise<trendForYear | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.createTrend(1, "apple")
        ).toBe(MockApiImpl);

    });

    it('should update trend', async () => {
        jest
            .spyOn(repo, 'updateTrendSales')
            .mockImplementation(
                () => Promise.resolve(Mockplayload)
            );

        expect(
            await repo.updateTrendSales(1, "apple", [15, 10, 25])
        ).toBe(Mockplayload);

    });

    it('should update date of sale', async () => {
        jest
            .spyOn(repo, 'updateDateofSale')
            .mockImplementation(
                () => Promise.resolve(Mockplayload)
            );

        expect(
            await repo.updateDateofSale(1, "apple", new Date())
        ).toBe(Mockplayload);

    });

    it('should update last restock', async () => {
        jest
            .spyOn(repo, 'updateLastRestock')
            .mockImplementation(
                () => Promise.resolve(Mockplayload)
            );

        expect(
            await repo.updateLastRestock(1, "apple", new Date())
        ).toEqual(MockApiImpl);

    });

    it('should delete trend', async () => {
        jest
            .spyOn(repo, 'deleteTrend')
            .mockImplementation(
                () => Promise.resolve(Mockplayload)
            );

        expect(
            await repo.deleteTrend(1, "apple")
        ).toEqual(MockApiImpl);

    });

    it('should get sales amount', async () => {
        jest
            .spyOn(repo, 'getSalesAmount')
            .mockImplementation(
                () => Promise.resolve(Mocknumber)
            );

        expect(
            await repo.getSalesAmount(1, "apple")
        ).toEqual(Mocknumber);

    });

    it('should update amount sales', async () => {
        jest
            .spyOn(repo, 'updateAmountSales')
            .mockImplementation(
                () => Promise.resolve(Mockplayload)
            );

        expect(
            await repo.updateAmountSales(1, "apple", [10, 5, 5])
        ).toBe(Mockplayload);

    });

    it('should get scale trend', async () => {
        jest
            .spyOn(repo, 'getScaleTrend')
            .mockImplementation(
                () => Promise.resolve(MockScaleTrend)
            );

        expect(
            await repo.getScaleTrend(1)
        ).toEqual(MockApiImpl);

    });

    it('should delete all scale trend data', async () => {
        jest
            .spyOn(repo, 'deleteAllScaleTrendData')
            .mockImplementation(
                () => Promise.resolve(Mockplayload)
            );

        expect(
            await repo.deleteAllScaleTrendData(1, "apple", new Date(), 1)
        ).toEqual(MockApiImpl);

    });
});
