import { Injectable, Param } from '@nestjs/common';

import {profileRepository} from '../../../repository/src/lib/profile.repository';

@Injectable()
export class profileService {
  constructor(private repo: profileRepository) {}
  async getProfile(id: number) {
    return await this.repo.getprofile(id);
  }
  async editName(id: number, name: string) {
    return await this.repo.editName(id,name);
  }
  async editSurname(id: number, surname: string) {
    return await this.repo.editSurname(id,surname);
  }
  async editBio(id: number, bio: string) {
    return await this.repo.editBio(id,bio);
  }
  async editVisibility(id: number, visibility: string) {
    return await this.repo.editVisibility(id,visibility);
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