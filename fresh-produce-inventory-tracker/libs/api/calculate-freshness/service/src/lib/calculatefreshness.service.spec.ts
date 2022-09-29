import { Test } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { calculatefreshnessService } from './calculatefreshness.service';

class model {
    model: string[];
}

class freshness {
    id: number;
    type: string;
    file: string;
}

const MockModelArr: jest.Mocked<model> = new model() as model;
const mockFreshness: jest.Mocked<freshness> = new freshness() as freshness;
describe('ApiAuthorizationRepositoryTest', () => {
    let data: calculatefreshnessService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [],
            providers: [calculatefreshnessService, PrismaService],
        }).compile();

        data = moduleRef.get<calculatefreshnessService>(calculatefreshnessService);
    });

    it('should get all models', async () => {
        jest
            .spyOn(data, 'getAllModels')
            .mockImplementation(
                (): Promise<null> => Promise.resolve(null)
            );
        expect(
            await data.getAllModels()
        ).toBe(MockModelArr);
    });

    it('should get predict', async () => {
        jest
            .spyOn(data, 'predict')
            .mockImplementation(
                (): Promise<null> => Promise.resolve(null)
            );
        expect(
            await data.predict(1, 'fruit', '//files/banana.png')
        ).toBe(mockFreshness);
    });
});