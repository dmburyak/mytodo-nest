import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() task: Task): Promise<Task[]> {
    return this.tasksService.create(task);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id/update')
  async update(@Param('id') id, @Body() task: Task): Promise<Task> {
    task.id = Number(id);
    return this.tasksService.update(task);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    return this.tasksService.delete(+id);
  }
}
