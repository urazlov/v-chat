import { InjectRepository } from '@nestjs/typeorm';
import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer() server: Server;

  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  @SubscribeMessage('sendMessage')
  async handleMessage(
    @MessageBody()
    data: { senderId: number; receiverId: number; content: string },
    @ConnectedSocket() client: Socket
  ): Promise<void> {
    const sender = await this.userRepository.findOneBy({ id: data.senderId });
    if (!sender) {
      console.error('Sender not found');
      return;
    }

    const message = this.messageRepository.create({
      sender: sender,
      receiverId: data.receiverId,
      content: data.content,
      timestamp: new Date(),
    });

    await this.messageRepository.save({
      sender: sender,
      receiverId: data.receiverId,
      content: data.content,
      timestamp: new Date(),
    });

    client.emit('newMessage', {
      senderId: sender.id,
      receiverId: data.receiverId,
      content: data.content,
      timestamp: new Date(),
    });

    this.server.to(data.receiverId.toString()).emit('newMessage', message);
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    const userId = client.handshake.query.userId;
    client.join(userId);
    console.log(`Client connected: ${client.id} in room ${userId}`);
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
