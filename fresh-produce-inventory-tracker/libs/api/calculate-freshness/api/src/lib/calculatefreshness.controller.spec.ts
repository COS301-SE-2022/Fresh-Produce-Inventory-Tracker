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

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [calculatefreshnessController],
            providers: [
                PrismaService, calculatefreshnessService],
        }).compile();

        controller = module.get<calculatefreshnessController>(calculatefreshnessController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});