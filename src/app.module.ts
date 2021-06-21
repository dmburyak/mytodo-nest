import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CategoriesModule } from './categories/categories.module';
import { PrioritiesModule } from './priorities/priorities.module';
import { Tasks } from './tasks/tasks.entity';
import { Categories } from './categories/categories.entity';
import { Priorities } from './priorities/priorities.entity';
import { FlightsModule } from './flights/flights.module';
import { Flights } from './flights/flights.entity';

@Module({
  imports: [
    FlightsModule,
    TasksModule,
    CategoriesModule,
    PrioritiesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      // username: 'dm',
      username: 'postgres',
      password: '111111',
      database: 'myTodo',
      // database: 'transportation',
      entities: [Tasks, Categories, Priorities, Flights],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
