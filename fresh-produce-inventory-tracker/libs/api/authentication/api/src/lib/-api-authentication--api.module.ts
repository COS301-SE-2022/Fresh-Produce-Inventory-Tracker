import { Module } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/shared/src/lib/prismaService.service";
import { AuthenticationController } from './authentication.controller';
import { AuthenicationRepository } from '../../../repository/src/lib/authentication.repository';
import { AuthenticationService } from '../../../service/src/lib/authentication.service';
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../../service/src/lib/strategy/jwt.strategy';

@Module({
  imports: [ConfigModule.forRoot({}), JwtModule.register({})],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenicationRepository, PrismaService, JwtStrategy]
})
export class ApiAuthenticationApiModule { }
