import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { authenticationDto } from './authentication.dto';
import { AuthenicationRepository } from '../../../repository/src/lib/authentication.repository';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class AuthenticationService {

  constructor(private repo: AuthenicationRepository, private jwt: JwtService, private config: ConfigService) { }
  async signup(email: string, password: string) {
    //encrypt
    const salt = '22';
    return await this.repo.createUser(email, password, salt);
  }
  async signin(dto: authenticationDto) {
    const user = await this.repo.getUser(dto.email);
    if (!user) throw new UnauthorizedException('Password incorrect');
    const password = user.password;
    if (dto.password != password)
      throw new UnauthorizedException('Password incorrect');
    return this.setToken(user.id, user.email);
  }
  async setToken(id: number, email: string) {
    const data = { sub: id, email };
    const secret = await this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(data, { expiresIn: '15m', secret: secret });
    return { id: id, Access: token };
  }
  async getUser(email: string) {
    const user = await this.repo.getUser(email);
    if (!user) throw new ForbiddenException('Email not found!');
    delete user.password;
    delete user.passwordSalt;
    return user;
  }
  async editPassword(email: string, password: string) {
    const user = await this.repo.getUser(email);
    if (!user) throw new ForbiddenException('Email not found!');
    const user2 = await this.repo.editUser(user.id, { password: password })
    delete user2.password;
    delete user2.passwordSalt;
    return 'Password reset';
  }

}
