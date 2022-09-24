import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { profileRepository } from '../../../repository/src/lib/profile.repository';

@Injectable()
export class profileService {
  constructor(private repo: profileRepository, private jwt: JwtService) { }
  /* async getProfile(id: number) {
    return await this.repo.getprofile(id);
   }*/
  async getProfile(token: string) {
    const { id } = await this.jwt.verifyAsync(token, { secret: Buffer.from(process.env.JWT_SECRET).toString('base64') });
    if(id == null)
    {
     throw new NotFoundException('id not found');
    }
    return this.repo.getprofile(id);
  }

  async editProfile(token: string, data: string) {
    const { id } = await this.jwt.verifyAsync(token, { secret: Buffer.from(process.env.JWT_SECRET).toString('base64') });
    console.log(JSON.parse(data));
    return this.repo.editProfile(id, JSON.parse(data));
  }

  async editName(id: number, name: string) {
    const edit = await this.repo.editName(id, name);
    if(edit == null)
    {
      throw new NotFoundException('Id not found');
    }
    return edit;//await this.repo.editName(id, name);
  }
  async editSurname(id: number, surname: string) {
   const edit =await this.repo.editSurname(id, surname);
   if(edit == null)
   {
    return new NotFoundException('Id not found');
   }
    return edit;
  }
  async editBio(id: number, bio: string) {
    return await this.repo.editBio(id, bio);
  }
  async editVisibility(id: number, visibility: string) {
    return await this.repo.editVisibility(id, visibility);
  }

  async deleteName(id: number) {
    return await this.repo.deleteName(id);

  }
  async deleteSurname(id: number) {
    return await this.repo.deleteSurname(id);
  }
  async deleteBio(id: number) {
    return await this.repo.deleteBio(id);
  }
  async deleteVisibility(id: number) {
    return await this.repo.deleteVisibility(id);
  }
}