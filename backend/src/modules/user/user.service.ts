import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async createUser(
    email: string,
    password: string,
    name: string,
    login: string
  ): Promise<User> {
    const newUser = this.userRepository.create({
      email,
      password,
      name,
      login,
    });
    return await this.userRepository.save(newUser);
  }

  async findByLogin(login: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { login } });
  }

  async findById(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }
}
