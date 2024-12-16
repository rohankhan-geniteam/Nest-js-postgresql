import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


// @Controller('tasks')
// export class TaskController {
//   constructor(private taskService: TaskService) {}

//   @Post()
//   createTask(@Body() body: { title: string; description: string }) {
//     return this.taskService.createTask(body);
//   }

//   @Get()
//   getTasks() {
//     return this.taskService.getTasks();
//   }

//   @Get(':id')
//   getTaskById(@Param('id') id: string) {
//     return this.taskService.getTaskById(Number(id));
//   }

//   @Patch(':id')
//   updateTask(@Param('id') id: string, @Body() body: { title?: string; description?: string; isCompleted?: boolean }) {
//     return this.taskService.updateTask(Number(id), body);
//   }

//   @Delete(':id')
//   deleteTask(@Param('id') id: string) {
//     return this.taskService.deleteTask(Number(id));
//   }
// }


@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createTask(@Body() body: { title: string; description: string }) {
    return this.taskService.createTask(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() body: { title?: string; description?: string; isCompleted?: boolean },
  ) {
    return this.taskService.updateTask(Number(id), body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(Number(id));
  }
}
