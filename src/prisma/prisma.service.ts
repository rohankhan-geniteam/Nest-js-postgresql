import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  user: any;
  async onModuleInit() {
    await this.$connect();
    console.log('DB IS CONNECTED SUCCESSFULLY....');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
