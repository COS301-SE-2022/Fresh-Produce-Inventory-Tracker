import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { calculatefreshnessService } from '../../../service/src/lib/calculatefreshness.service';
import { calculatefreshnessController } from './calculatefreshness.controller';
import { Request } from 'express';

class freshness {
    id: number;
    type: string;
    file: string;
}

const mockFreshness: jest.Mocked<freshness> = new freshness() as freshness;
describe('Calculate freshness controller', () => {
    let controller: calculatefreshnessController;

});