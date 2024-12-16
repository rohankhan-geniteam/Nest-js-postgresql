// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';  // Assuming you are using Prisma
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Find a user by username
  async findByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  // Find a user by ID (useful for the JWT strategy)
  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Verify the user's password
  async validatePassword(user: any, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  // Optionally, you can create a method to register users, if needed
  async create(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        roles: ['user'],  // Default role
      },
    });
  }
}
