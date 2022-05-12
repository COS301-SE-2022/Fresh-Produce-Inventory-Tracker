//call database for scale to store scale data

import { ForbiddenException, Injectable } from '@nestjs/common';
import { ScaleRepository } from '../../../repository/src/lib/scale.repository';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';

@Injectable({})
export class ScaleService { //id: number, userid: number
    constructor(private repo: ScaleRepository) { }
    async getScale(id: number, userid: number) {
        return await this.repo.getScale(id, userid);
    }
}