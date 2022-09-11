
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'libs/api/prisma/shared/src/lib/prismaService.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor(config:ConfigService, private prisma:PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: {sub:number,email:string}) {
    //console.log('here');
    const user =  await this.prisma.user.findUnique({where:{id:payload.sub}});
    delete user.password;
    delete user.passwordSalt;
    delete user.createdAt;
    delete user.updatedAt;
    return {id:user.id,email:user.email};
  }
}
