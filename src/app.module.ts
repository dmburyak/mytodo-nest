import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CategoriesModule } from './categories/categories.module';
import { PrioritiesModule } from './priorities/priorities.module';
import { Task } from './tasks/tasks.entity';
import { Category } from './categories/categories.entity';
import { Priority } from './priorities/priorities.entity';

@Module({
  imports: [
    TasksModule,
    CategoriesModule,
    PrioritiesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '111111',
      database: 'myTodo',
      entities: [Task, Category, Priority],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
