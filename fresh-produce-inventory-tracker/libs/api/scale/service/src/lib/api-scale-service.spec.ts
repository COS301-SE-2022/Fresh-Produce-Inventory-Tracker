import { Test } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ScaleRepository } from '../../../repository/src/lib/scale.repository';
import { ScaleService } from './scale.service';

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
        }).compile();
        data = moduleRef.get<ScaleService>(ScaleService);
    });
});

