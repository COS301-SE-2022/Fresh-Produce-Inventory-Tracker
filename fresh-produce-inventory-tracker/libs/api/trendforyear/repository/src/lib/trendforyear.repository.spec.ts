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
});
