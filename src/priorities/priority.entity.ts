import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Priority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
