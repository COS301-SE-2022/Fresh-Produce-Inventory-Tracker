import { ForbiddenException, Injectable } from '@nestjs/common';
import { authenticationDto } from './authentication.dto';
import { AuthenicationRepository } from '../../../repository/src/lib/authentication.repository';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class AuthenticationService {
  constructor(private repo: AuthenicationRepository, private jwt:JwtService,private config:ConfigService,private mailService:MailService) {}
  async signup(email: string, password: string) {
    //encrypt
    const salt = '22';
    return await this.repo.createUser(email, password, salt);
  }
  async signin(dto: authenticationDto) {
    const user = await this.repo.getUser(dto.email);
    if (!user) throw new ForbiddenException('Email incorrect');
    const password = user.password;
    if (dto.password != password)
      throw new ForbiddenException('Password incorrect');
    return this.setToken(user.id,user.email);
  }
  async setToken(id:number,email:string)
  {
    const data = {sub:id,email};
    const secret = await this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(data,{expiresIn:'15m',secret:secret});
    return {Access:token};
  }
  async forgotPassword(email:string)
  {
    const user = await this.repo.getUser(email);
    if (!user) throw new ForbiddenException('Email incorrect');
    await this.mailService.sendUserConfirmation(email);
    return ;
  }
}
