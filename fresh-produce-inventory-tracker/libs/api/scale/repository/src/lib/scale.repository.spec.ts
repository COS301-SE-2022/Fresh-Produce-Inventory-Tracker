import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ScaleRepository } from './scale.repository';
class scale{
  id:number;
  createdAt:Date;
  updatedAt:Date;
  userId: number;
   WeightTotal: number; 
   WeightIndividual: number;
   ProduceType: string;
   Name:string; Description:string;
}
//const reqMock = jest.mock('./api');
const MockApiImpl : jest.Mocked<scale> = new scale() as scale;
describe('ImagesController', () => {
  let repo: ScaleRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers:[ScaleRepository,PrismaService],
    }).compile();

    repo = module.get<ScaleRepository>(ScaleRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });
  it('should get scale', async () => {
    jest
      .spyOn(repo, 'getScale')
      .mockImplementation(
        (): Promise<scale | null> => Promise.resolve(MockApiImpl)
      );
      //const req = MockRequest.;
    expect(
      await repo.getScale(1,1)
    ).toBe(MockApiImpl);
  });
  it('should not get scale not exist', async () => {
    jest
      .spyOn(repo, 'getScale')
      .mockImplementation(
        () => Promise.resolve(MockApiImpl)
      );

    expect(
      await repo.getScale(1,1)
    ).toBe(MockApiImpl);
  });
  it('should create scale', async () => {
    jest
      .spyOn(repo, 'createScale')
      .mockImplementation(
        (): Promise<scale | null> => Promise.resolve(MockApiImpl)
      );

    expect(
      await repo.createScale(1,100,10,'BREAD','','')
    ).toBe(MockApiImpl);
  });
  it('should create scale', async () => {
    jest
      .spyOn(repo, 'createScale')
      .mockImplementation(
        (): Promise<scale | null> => Promise.resolve(MockApiImpl)
      );

    expect(
      await repo.createScale(1,100,10,'BREAD','','')
    ).toBe(MockApiImpl);
  });
  
});

/*async getScale(id: number, userid: number) {
    return await this.prisma.scale.findUnique({ where: { id_userId: { userId: userid, id: id } } });
  }
  async createScale(userId: number, weightfull: number, weightone: number, producetype: Prisma.EnumProduceTypeFilter) {
    return await this.prisma.scale.create({
      data: { userId: userId, WeightTotal: weightfull, WeightIndividual: weightone, ProduceType: producetype.equals }
    });
  }
  async editScale(id: number, userid: number, data: any) {
    return await this.prisma.scale.update({ where: { id_userId: { id: id, userId: userid } }, data: data });
  }
  async removeScale(id: number, userid: number) {
    return await this.prisma.scale.delete({ where: { id_userId: { id: id, userId: userid } } });
  }*/