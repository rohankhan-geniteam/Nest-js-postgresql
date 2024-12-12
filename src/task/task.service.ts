import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: { title: string; description: string }): Promise<Task> {
    return this.prisma.task.create({ data });
  }

  async getTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number): Promise<Task> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async updateTask(id: number, data: { title?: string; description?: string; isCompleted?: boolean }): Promise<Task> {
    return this.prisma.task.update({ where: { id }, data });
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id } });
  }
}
