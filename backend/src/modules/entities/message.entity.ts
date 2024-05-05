import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  timestamp: Date;

  @ManyToOne(() => User, (user) => user.messages)
  sender: User;

  @Column()
  receiverId: number;
}
