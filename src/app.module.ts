import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CategoriesModule } from './categories/categories.module';
import { PrioritiesModule } from './priorities/priorities.module';
import { Task } from './tasks/task.entity';
import { Category } from './categories/category.entity';
import { Priority } from './priorities/priority.entity';

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
