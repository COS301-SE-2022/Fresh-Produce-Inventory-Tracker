import { Test } from '@nestjs/testing';
import { Prisma, Weekdays } from '@prisma/client';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { profileRepository } from '../../../repository/src/lib/profile.repository';
import { profileService } from '../../../service/src/lib/profile.service';

class User {
    id: number;
    email: string;
    password: string;
    passwordSalt: string;
    Name:string;Surname:string; Bio:string; Visibility:boolean;
    createdAt: Date;
    updatedAt: Date;
}

const MockProfile: jest.Mocked<User> = new User() as User;

describe('Task Service Test', () => {
    let data: profileService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [],
            providers: [profileService, profileRepository, PrismaService],
        }).compile();
        data = moduleRef.get<profileService>(profileService);
    });

    it('should get profile', async () => {
        jest
            .spyOn(data, 'getProfile')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.getProfile('blablaefnweisegfujnwfenw9efnwiiefnsdfnsffsf.sfsfsfsfsfsfsf.sfsf')
        ).toBe(MockProfile);
    });
    it('should edit name', async () => {
        jest
            .spyOn(data, 'editName')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.editName(1, "name")
        ).toBe(MockProfile);
    });
    it('should edit surname', async () => {
        jest
            .spyOn(data, 'editSurname')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.editSurname(1, "surname")
        ).toBe(MockProfile);
    });
    it('should edit bio', async () => {
        jest
            .spyOn(data, 'editBio')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.editBio(1, "bio")
        ).toBe(MockProfile);
    });
    it('should edit visibility', async () => {
        jest
            .spyOn(data, 'editVisibility')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.editVisibility(1, 'true')
        ).toBe(MockProfile);
    });

    it('should delete name', async () => {
        jest
            .spyOn(data, 'deleteName')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.deleteName(1)
        ).toBe(MockProfile);
    });
    it('should delete surname', async () => {
        jest
            .spyOn(data, 'deleteSurname')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.deleteSurname(1)
        ).toBe(MockProfile);
    });
    it('should delete bio', async () => {
        jest
            .spyOn(data, 'deleteBio')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.deleteBio(1)
        ).toBe(MockProfile);
    });
    it('should delete visibility', async () => {
        jest
            .spyOn(data, 'deleteVisibility')
            .mockImplementation(
                (): Promise<User | null> => Promise.resolve(MockProfile)
            );
        //const req = MockRequest.;
        expect(
            await data.deleteVisibility(1)
        ).toBe(MockProfile);
    });
});
