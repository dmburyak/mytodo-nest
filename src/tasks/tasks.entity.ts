import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Priority } from '../priorities/priority.model';
import { Priorities } from '../priorities/priorities.entity';
import { Categories } from '../categories/categories.entity';
import { Category } from '../categories/category.model';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Priorities, (priority) => priority.id, { eager: true })
  // @ManyToOne(() => Priorities, (priority) => priority.id)
  @JoinColumn()
  priority: Priority;

  @ManyToOne(() => Categories, (category) => category.id, { eager: true })
  @JoinColumn()
  category: Category;

  @Column()
  completed: boolean;

  @Column('timestamp with time zone')
  date: Date;
}
