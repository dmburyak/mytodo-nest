import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrioritiesService } from './priorities.service';
import { PrioritiesController } from './priorities.controller';
import { Priorities } from './priorities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Priorities])],
  controllers: [PrioritiesController],
  providers: [PrioritiesService]
})
export class PrioritiesModule {}
