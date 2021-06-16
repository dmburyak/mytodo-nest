import { Injectable } from '@nestjs/common';
import { Categories } from './categories.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoryRepository: Repository<Categories>,
  ) {}

  async create(category: Category): Promise<any> {
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<any> {
    return await this.categoryRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.categoryRepository.findOne(id);
  }

  async update(category: Category): Promise<any> {
    return await this.categoryRepository.update(category.id, category);
  }

  async delete(id: number): Promise<any> {
    return await this.categoryRepository.delete(id);
  }
}
