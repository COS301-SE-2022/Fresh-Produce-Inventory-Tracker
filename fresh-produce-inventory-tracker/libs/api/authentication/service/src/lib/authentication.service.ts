import { ForbiddenException, Injectable } from '@nestjs/common';
import { authenticationDto } from './authentication.dto';
import { AuthenicationRepository } from '../../../repository/src/lib/authentication.repository';

@Injectable({})
export class AuthenticationService {
  constructor(private repo: AuthenicationRepository) {}
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
    return user;
  }
}
