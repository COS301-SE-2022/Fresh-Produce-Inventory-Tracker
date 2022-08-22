import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from '../../../service/src/lib/authentication.service';
@Controller('authentication')
export class AuthenticationController {
  constructor(private AuthenticationService: AuthenticationService) { }

  @Post('signup')
  async signup(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string,
    @Body('surname') surname: string,
  ) {
    return this.AuthenticationService.signup(email, password, name, surname);
  }
  @Post('signin')
  signin(@Body('email') email: string, @Body('password') password: string) {
    return this.AuthenticationService.signin({
      email: email,
      password: password,
    });
  }
  @Post('resetpassword')
  async resetPassword(@Body('email') email: string) {
    return this.AuthenticationService.getUser(email);
  }
  @Post('editpassword')
  async editpassword(@Body('email') email: string, @Body('password') password: string) {
    return this.AuthenticationService.editPassword(email, password);
  }
  @Post('deleteuser')
  async deleteuser(@Body('email') email: string) {
    return this.AuthenticationService.deleteUser(email);
  }

}
