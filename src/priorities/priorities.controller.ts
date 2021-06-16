import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrioritiesService } from './priorities.service';
import { Priority } from './priority.model';

@Controller('priorities')
export class PrioritiesController {
  constructor(private readonly prioritiesService: PrioritiesService) {}

  @Post()
  async create(@Body() priority: Priority): Promise<Priority[]> {
    return this.prioritiesService.create(priority);
  }

  @Get()
  async findAll(): Promise<Priority[]> {
    return this.prioritiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Priority> {
    return this.prioritiesService.findOne(+id);
  }

  @Patch(':id/update')
  async update(@Param('id') id, @Body() priority: Priority): Promise<Priority> {
    priority.id = Number(id);
    return this.prioritiesService.update(priority);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    return this.prioritiesService.delete(+id);
  }
}
