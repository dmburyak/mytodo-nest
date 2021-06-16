import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Priorities } from './priorities.entity';
import { Priority } from './priority.model';

@Injectable()
export class PrioritiesService {
  constructor(
    @InjectRepository(Priorities)
    private readonly priorityRepository: Repository<Priorities>,
  ) {}

  async create(priority: Priority): Promise<any> {
    return await this.priorityRepository.save(priority);
  }

  async findAll(): Promise<any> {
    return await this.priorityRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.priorityRepository.findOne(id);
  }

  async update(priority: Priority): Promise<any> {
    return await this.priorityRepository.update(priority.id, priority);
  }

  async delete(id: number): Promise<any> {
    return await this.priorityRepository.delete(id);
  }
}
