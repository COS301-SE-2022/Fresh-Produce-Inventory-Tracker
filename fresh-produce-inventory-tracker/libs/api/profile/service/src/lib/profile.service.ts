import { Delete, Injectable, NotFoundException, Param } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { editFileName } from 'libs/api/calculate-freshness/api/src/lib/calculatefreshness.controller';
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
    delete edit.password;
   delete edit.passwordSalt;
    return edit;//await this.repo.editName(id, name);
  }
  async editSurname(id: number, surname: string) {
   const edit =await this.repo.editSurname(id, surname);
   if(edit == null)
   {
    return new NotFoundException('Id not found');
   }
   delete edit.password;
   delete edit.passwordSalt;

    return edit;
  }
  async editBio(id: number, bio: string) {
    const edit = await this.repo.editBio(id, bio);
    if(edit == null)
   {
    return new NotFoundException('Id not found');
   }
    delete edit.password;
   delete edit.passwordSalt;
   return edit;
  }
  async editVisibility(id: number, visibility: string) {
    const edit = await this.repo.editVisibility(id, visibility);
    if(edit == null)
   {
    return new NotFoundException('Id not found');
   }
    delete edit.password;
   delete edit.passwordSalt;
   return edit;
  }

  async deleteName(id: number) {
    const edit = await this.repo.deleteName(id);
    if(edit == null)
   {
    return new NotFoundException('Id not found');
   }
    delete edit.password;
    delete edit.passwordSalt;
   return edit;
  }
  async deleteSurname(id: number) {
    const edit = await this.repo.deleteSurname(id);
    if(edit == null)
   {
    return new NotFoundException('Id not found');
   }
    delete edit.password;
   delete edit.passwordSalt;
   return edit;
  }
  async deleteBio(id: number) {
    const edit = await this.repo.deleteBio(id);
    if(edit == null)
   {
    return new NotFoundException('Id not found');
   }
    delete edit.password;
   delete edit.passwordSalt;
   return edit;
  }
  async deleteVisibility(id: number) {
    const edit = await this.repo.deleteVisibility(id);
    if(edit == null)
   {
    return new NotFoundException('Id not found');
   }
    delete edit.password;
   delete edit.passwordSalt;
   return edit;
  }
  
}