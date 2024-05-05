import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column({ nullable: true })
  avatarSrc: string;

  @OneToMany(() => Message, (message) => message.sender)
  messages: Message[];
}
