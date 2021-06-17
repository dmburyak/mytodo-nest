import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './categories.entity';
import { Category } from './category.model';

@Injectable()
export class CategoriesService {
  testArr = [1, 2, 3];

  constructor(
    @InjectRepository(Categories)
    private readonly categoryRepository: Repository<Categories>,
  ) {}

  async create(category: Category): Promise<any> {
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<any> {
    // return await this.testArr;
    return this.categoryRepository.find();
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
