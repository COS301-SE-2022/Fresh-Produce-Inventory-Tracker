import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from '../../../service/src/lib/authentication.service';
@Controller('authentication')
export class AuthenticationController {
  constructor(private AuthenticationService: AuthenticationService) { }

  @Post('signup')
  async signup(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    console.log(email, password);
    return await this.AuthenticationService.signup(email, password);
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
    return await this.AuthenticationService.getUser(email);
  }
  @Post('editpassword')
  async editpassword(@Body('email') email: string, @Body('password') password: string) {
    return await this.AuthenticationService.editPassword(email, password);
  }

}
