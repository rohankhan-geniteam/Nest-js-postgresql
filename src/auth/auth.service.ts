// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';  // Import UsersService
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,  // Inject UsersService
    private jwtService: JwtService,
  ) {}

  // Validate user credentials
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && await this.usersService.validatePassword(user, password)) {
      const { password, ...result } = user;  // Exclude password from result
      return result;
    }
    return null;
  }

  // Generate JWT token for a valid user
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };  // Use user id as sub
    return {
      access_token: this.jwtService.sign(payload),  // Return JWT token
    };
  }
}
