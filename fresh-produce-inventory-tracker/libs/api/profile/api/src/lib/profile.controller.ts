import { Body, Controller, NotFoundException, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { profileService } from '../../../service/src/lib/profile.service';
@Controller('profile')
export class profileController {
  constructor(private service: profileService) {}

  @Post('getprofile')
  async getTasks(@Body('token') token: string) {
    try {
      return this.service.getProfile(token);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('editprofile')
  async editProfile(@Body('token') token: string, @Body('data') data: string) {
    try {
      return this.service.editProfile(token, data);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('editname')
  editName(@Body('id') id: number, @Body('name') name: string) {
    try {
      return this.service.editName(id, name);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('editsurname')
  editSurname(@Body('id') id: number, @Body('surname') surname: string) {
    try {
      return this.service.editSurname(id, surname);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('editbio')
  editBio(@Body('id') id: number, @Body('bio') bio: string) {
    try {
      return this.service.editBio(id, bio);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('editvisibility')
  editVisibility(
    @Body('id') id: number,
    @Body('visibility') visibility: string
  ) {
    try {
      return this.service.editVisibility(id, visibility);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('deletename')
  deleteName(@Body('id') id: number) {
    try {
      return this.service.deleteName(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('deletesurname')
  deleteSurname(@Body('id') id: number) {
    try {
      return this.service.deleteSurname(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('deletebio')
  deleteBio(@Body('id') id: number) {
    try {
      return this.service.deleteBio(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('deletevisibility')
  deleteVisibility(@Body('id') id: number) {
    try {
      return this.service.deleteVisibility(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
