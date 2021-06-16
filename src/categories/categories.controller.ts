import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.model';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() category: Category): Promise<Category[]> {
    return this.categoriesService.create(category);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id/update')
  async update(@Param('id') id, @Body() category: Category): Promise<Category> {
    category.id = Number(id);
    return this.categoriesService.update(category);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    return this.categoriesService.delete(+id);
  }
}
