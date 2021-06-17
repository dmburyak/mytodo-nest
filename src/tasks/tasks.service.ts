import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from './tasks.entity';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private readonly taskRepository: Repository<Tasks>,
  ) {}

  async create(task: Task): Promise<any> {
    return await this.taskRepository.save(task);
  }

  async findAll(): Promise<any> {
    console.log('1212');
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.taskRepository.findOne(id);
  }

  async update(task: Task): Promise<any> {
    return await this.taskRepository.update(task.id, task);
  }

  async delete(id: number): Promise<any> {
    return await this.taskRepository.delete(id);
  }
}
