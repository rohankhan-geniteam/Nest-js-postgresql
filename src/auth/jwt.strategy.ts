import { Injectable } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    ConfigModule.forRoot(),
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
