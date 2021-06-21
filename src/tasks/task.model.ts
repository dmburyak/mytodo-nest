import { Priority } from '../priorities/priority.model';
import { Category } from '../categories/category.model';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  date: Date;
}
