import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthenticationController } from './authentication.controller';
import { AuthenicationRepository } from "./authentication.repository";
import { AuthenticationService } from './authentication.service';

@Module({
    imports:[],
  controllers: [AuthenticationController],
  providers: [AuthenticationService,AuthenicationRepository,PrismaService]
})
export class AuthenticationModule {};