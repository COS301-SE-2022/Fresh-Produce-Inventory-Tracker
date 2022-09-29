import { Test } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { calculatefreshnessService } from './calculatefreshness.service';

describe('ApiAuthorizationRepositoryTest', () => {
    let data: calculatefreshnessService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [],
            providers: [calculatefreshnessService, PrismaService],
        }).compile();

        data = moduleRef.get<calculatefreshnessService>(calculatefreshnessService);

    });
});