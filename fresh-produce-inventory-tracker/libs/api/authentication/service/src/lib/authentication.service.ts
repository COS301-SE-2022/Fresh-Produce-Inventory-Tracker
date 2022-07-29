import { Prisma } from '@prisma/client';
import { ConflictException, ForbiddenException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { authenticationDto } from './authentication.dto';
import { AuthenicationRepository } from '../../../repository/src/lib/authentication.repository';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
//import {MailService} from '../../../../notifications/service/src/lib/notification.service
import bcrypt = require('bcrypt');

@Injectable({})
export class AuthenticationService {

  constructor(private repo: AuthenicationRepository, private jwt: JwtService, private config: ConfigService) { }
  async signup(email: string, password: string, name: string, surname: string) {
    try {
      const salt = '10';
      const hash = await bcrypt.hash(password, 10)
      const data = await this.repo.createUser(email, hash, salt, name, surname);
      if (data) {
        const dto = new authenticationDto()
        dto.email = email;
        dto.password = password;
        return this.signin(dto);
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") throw new ConflictException();
      else throw new InternalServerErrorException();
    }
  }

  async signin(dto: authenticationDto) {
    const user = await this.repo.getUser(dto.email.toLowerCase());
    if (!user) throw new UnauthorizedException('Email/Password incorrect.');
    const password = user.password;
    if ((await bcrypt.compare(dto.password, password)) == false) throw new UnauthorizedException('Email/Password incorrect.');
    return {
      token: await this.setToken(user.id, user.email, user.Name, user.Surname)
    };
  }

  async setToken(id: number, email: string, name: string, surname: string) {
    const data = { id: id, email, name: name, surname: surname };
    const secret = await this.config.get('JWT_SECRET');
    return this.jwt.signAsync(data, { expiresIn: '15m', secret: Buffer.from(secret).toString("base64") });
  }

  async getUser(email: string) {
    const user = await this.repo.getUser(email);
    if (!user) throw new ForbiddenException('Email not found!');
    delete user.password;
    delete user.passwordSalt;
    return user;
  }
  async deleteUser(email: string) {
    const user = await this.repo.delete(email);
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
