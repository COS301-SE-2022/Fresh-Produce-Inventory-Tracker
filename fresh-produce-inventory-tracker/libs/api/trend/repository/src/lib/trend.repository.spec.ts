import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendRepository } from './trend.repository';
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

//const reqMock = jest.mock('./api');
const MockApiImpl: jest.Mocked<trend> = new trend() as trend;
describe('ImagesController', () => {
    let repo: trendRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [],
            providers: [trendRepository, PrismaService],
        }).compile();

        repo = module.get<trendRepository>(trendRepository);
    });

    it('should get trend for an item', async () => {
        jest
            .spyOn(repo, 'getTrendsForItem')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );
        //const req = MockRequest.;
        expect(
            await repo.getTrendsForItem(1, "apple")
        ).toBe(MockApiImpl);
    });
    it('should get trends for day and item', async () => {
        jest
            .spyOn(repo, 'getTrendsForDayAndItem')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.getTrendsForDayAndItem(1, "apple", Weekdays.Monday)
        ).toBe(MockApiImpl);
    });
    it('should get trends for all days', async () => {
        jest
            .spyOn(repo, 'getTrendsAllTrendsForDay')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.getTrendsAllTrendsForDay(1, Weekdays.Monday)
        ).toBe(MockApiImpl);
    });
    it('should get all trends for person', async () => {
        jest
            .spyOn(repo, 'getAll')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.getAll(1)
        ).toBe(MockApiImpl);

    });

    it('should create trend', async () => {
        jest
            .spyOn(repo, 'createTrend')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.createTrend(1, "apple", Weekdays.Monday)
        ).toBe(MockApiImpl);

    });

    it('should update trend', async () => {
        jest
            .spyOn(repo, 'updateTrendSales')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.updateTrendSales(1, "apple", Weekdays.Monday, 1)
        ).toBe(MockApiImpl);

    });

    it('should update date of sale', async () => {
        jest
            .spyOn(repo, 'updateDateofSale')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.updateDateofSale(1, "apple", Weekdays.Monday)
        ).toBe(MockApiImpl);

    });

    it('should update last restock', async () => {
        jest
            .spyOn(repo, 'updateLastRestock')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.updateLastRestock(1, "apple", Weekdays.Monday)
        ).toBe(MockApiImpl);

    });

    it('should delete trend', async () => {
        jest
            .spyOn(repo, 'deleteTrend')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.deleteTrend(1, "apple", Weekdays.Monday)
        ).toBe(MockApiImpl);

    });

    it('should get sales amount', async () => {
        jest
            .spyOn(repo, 'getSalesAmount')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.getSalesAmount(1, Weekdays.Monday, "apple")
        ).toBe(MockApiImpl);

    });

    it('should update amount sales', async () => {
        jest
            .spyOn(repo, 'updateAmountSales')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.updateAmountSales(1, "apple", Weekdays.Monday, 1)
        ).toBe(MockApiImpl);

    });

    it('should get scale trend', async () => {
        jest
            .spyOn(repo, 'getScaleTrend')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.getScaleTrend(1)
        ).toBe(MockApiImpl);

    });

    it('should delete all scale trend data', async () => {
        jest
            .spyOn(repo, 'deleteAllScaleTrendData')
            .mockImplementation(
                (): Promise<trend | null> => Promise.resolve(MockApiImpl)
            );

        expect(
            await repo.deleteAllScaleTrendData(1, "apple", Weekdays.Monday, 1)
        ).toBe(MockApiImpl);

    });
});

/*async getScale(id: number, userid: number) {
    return await this.prisma.scale.findUnique({ where: { id_userId: { userId: userid, id: id } } });
  }
  async createScale(userId: number, weightfull: number, weightone: number, producetype: Prisma.EnumProduceTypeFilter) {
    return await this.prisma.scale.create({
      data: { userId: userId, WeightTotal: weightfull, WeightIndividual: weightone, ProduceType: producetype.equals }
    });
  }
  async editScale(id: number, userid: number, data: any) {
    return await this.prisma.scale.update({ where: { id_userId: { id: id, userId: userid } }, data: data });
  }
  async removeScale(id: number, userid: number) {
    return await this.prisma.scale.delete({ where: { id_userId: { id: id, userId: userid } } });
  }*/