// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';  // Assuming you have Prisma setup

@Module({
  providers: [UsersService, PrismaService],  // Register PrismaService and UsersService
  exports: [UsersService],  // Export UsersService so it can be injected elsewhere
})
export class UsersModule {}
