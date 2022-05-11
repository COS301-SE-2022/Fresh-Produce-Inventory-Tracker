import { Module } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/shared/src/lib/prismaService.service";
import { AuthenticationController } from './authentication.controller';
import { AuthenicationRepository } from '../../../repository/src/lib/authentication.repository';
import { AuthenticationService } from '../../../service/src/lib/authentication.service';

@Module({
    imports:[],
  controllers: [AuthenticationController],
  providers: [AuthenticationService,AuthenicationRepository,PrismaService]
})
export class ApiAuthenticationApiModule {}
