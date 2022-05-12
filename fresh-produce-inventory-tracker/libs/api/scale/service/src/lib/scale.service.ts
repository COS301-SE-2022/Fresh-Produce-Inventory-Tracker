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
    async createScale(data: { userId: number, weightfull: number, weightone: number, producetype: Prisma.EnumProduceTypeFilter }) {
        const scale = await this.repo.createScale(data.userId, data.weightfull, data.weightone, data.producetype);
        return scale;
    }
    async editScale(id: number, userid: number, data: any) {
        return await this.repo.editScale(id, userid, data);
    }
    async removeScale(id: number, userId: number) {
        return await this.repo.removeScale(id, userId);
    }
}