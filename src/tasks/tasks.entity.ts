import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  priority: number;

  @Column()
  category: number;

  @Column()
  completed: boolean;

  @Column('timestamp with time zone')
  date: Date;
}
