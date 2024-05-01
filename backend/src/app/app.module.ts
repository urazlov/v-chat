import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../modules/auth/auth.controller';
import { UserService } from '../modules/user/user.service';
import { User } from '../modules/user/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'v-chat-user',
      password: 'v-chat-password',
      database: 'v-chat-database',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'v-chat-secret',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, UserService],
})
export class AppModule {}
