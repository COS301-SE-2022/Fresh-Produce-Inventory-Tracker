import { Test } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ScaleRepository } from '../../../repository/src/lib/scale.repository';
import { ScaleService } from './scale.service';
import {tasksModule} from '../../../../tasks/api/src/lib/tasks.module';
class scale {
    id: number;
    userId: number;
    WeightIndividual: number;
    WeightTotal: number;
    ProduceType: string;
    createdAt: Date;
    updatedAt: Date;
}

var scaleDataObj = {
    userId: 1,
    weightfull: 10,
    weightone: 1,
    producetype: 'apple'
}

const MockScale: jest.Mocked<scale> = new scale() as scale;

describe('Scalse Service Test', () => {
    let data: ScaleService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [],
            providers: [ScaleService, ScaleRepository, PrismaService],
            imports: [tasksModule]
        }).compile();
        data = moduleRef.get<ScaleService>(ScaleService);
    });

    it('should get scale', async () => {
        jest
            .spyOn(data, 'getScale')
            .mockImplementation(
                () => Promise.resolve(MockScale)
            );
        expect(await data.getScale(1, 1)).toBe(MockScale);
    });

    it('it should create scale', async () => {
        jest
            .spyOn(data, 'createScale')
            .mockImplementation(
                () => Promise.resolve(MockScale)
            );
        expect(await data.createScale(scaleDataObj)).toBe(MockScale);
    });

    it('it should edit scale', async () => {
        jest
            .spyOn(data, 'editScale')
            .mockImplementation(
                () => Promise.resolve(null)
            );
        expect(await data.editScale(1, 2, 40)).toBe(null);
    });

    it('it should remove scale', async () => {
        jest
            .spyOn(data, 'removeScale')
            .mockImplementation(
                () => Promise.resolve(null)
            );
        expect(await data.removeScale(1, 1)).toBe(null);
    });
});

