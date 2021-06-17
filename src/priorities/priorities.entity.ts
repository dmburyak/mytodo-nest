import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Priorities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  color: string;
}
