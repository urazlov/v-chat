import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../modules/auth/auth.controller';
import { UserService } from '../modules/user/user.service';
import { User } from '../modules/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ChatGateway } from '../modules/chat/chat.gateway';
import { Message } from '../modules/entities/message.entity';
import { JwtStrategy } from '../modules/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { MessagesController } from '../modules/message/message.controller';
import { MessagesService } from '../modules/message/message.service';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'v-chat-user',
      password: 'v-chat-password',
      database: 'v-chat-database',
      entities: [User, Message],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Message]),
    JwtModule.register({
      secret: 'v-chat-secret',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AppController, AuthController, MessagesController],
  providers: [
    AppService,
    UserService,
    ChatGateway,
    JwtStrategy,
    MessagesService,
  ],
})
export class AppModule {}
