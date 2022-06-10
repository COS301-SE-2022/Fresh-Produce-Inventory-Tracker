import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { profileRepository } from '../../../repository/src/lib/profile.repository';
import { profileService } from '../../../service/src/lib/profile.service';
import { profileController } from './profile.controller';
import { Request } from 'express';
import { Prisma, Weekdays } from '@prisma/client';

class user {
    id: number;
    email: string;
    password: string;
    passwordSalt: string;
    createdAt: Date;
    updatedAt: Date;
}

const MockProfile: jest.Mocked<user> = new user() as user;
describe('Trend Controller tests', () => {
    let controller: profileController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [profileController],
            providers: [profileService, PrismaService, profileService],
        }).compile();

        controller = module.get<profileController>(profileController);
    });

    it('should get tasks', async () => {
        jest
            .spyOn(controller, 'getTasks')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.getTasks(1)
        ).toBe(MockProfile);
    });
    it('should edit name', async () => {
        jest
            .spyOn(controller, 'editName')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.editName(1, "name")
        ).toBe(MockProfile);
    });
    it('should edit surname', async () => {
        jest
            .spyOn(controller, 'editSurname')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.editSurname(1, "surname")
        ).toBe(MockProfile);
    });
    it('should edit bio', async () => {
        jest
            .spyOn(controller, 'editBio')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.editBio(1, "bio")
        ).toBe(MockProfile);
    });
    it('should edit visibility', async () => {
        jest
            .spyOn(controller, 'editVisibility')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.editVisibility(1, true)
        ).toBe(MockProfile);
    });

    it('should delete name', async () => {
        jest
            .spyOn(controller, 'deleteName')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.deleteName(1)
        ).toBe(MockProfile);
    });
    it('should delete surname', async () => {
        jest
            .spyOn(controller, 'deleteSurname')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.deleteSurname(1)
        ).toBe(MockProfile);
    });
    it('should delete bio', async () => {
        jest
            .spyOn(controller, 'deleteBio')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.deleteBio(1)
        ).toBe(MockProfile);
    });
    it('should delete visibility', async () => {
        jest
            .spyOn(controller, 'deleteVisibility')
            .mockImplementation(
                (): Promise<user | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await controller.deleteVisibility(1)
        ).toBe(MockProfile);
    });
});

