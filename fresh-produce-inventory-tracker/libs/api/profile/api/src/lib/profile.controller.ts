import { Body, Controller, Post } from '@nestjs/common';
import { profileService } from '../../../service/src/lib/profile.service';
@Controller('profile')
export class profileController {
  constructor(private service: profileService) {

  }

  @Post('getprofile')
  async getTasks(
    @Body('token') token: string,
  ) {
    return this.service.getProfile(token);
  }
  @Post('editname')
  editName(@Body('id') id: number, @Body('name') name: string) {
    return this.service.editName(id, name);
  }
  @Post('editsurname')
  editSurname(@Body('id') id: number, @Body('surname') surname: string) {
    return this.service.editSurname(id, surname);
  }
  @Post('editbio')
  editBio(@Body('id') id: number, @Body('bio') bio: string) {
    return this.service.editBio(id, bio);
  }
  @Post('editvisibility')
  editVisibility(@Body('id') id: number, @Body('visibility') visibility: string) {
    return this.service.editVisibility(id, visibility);
  }
  @Post('deletename')
  deleteName(@Body('id') id: number) {
    return this.service.deleteName(id);
  }
  @Post('deletesurname')
  deleteSurname(@Body('id') id: number) {
    return this.service.deleteSurname(id);
  }
  @Post('deletebio')
  deleteBio(@Body('id') id: number) {
    return this.service.deleteBio(id);
  }
  @Post('deletevisibility')
  deleteVisibility(@Body('id') id: number) {
    return this.service.deleteVisibility(id);
  }


}


