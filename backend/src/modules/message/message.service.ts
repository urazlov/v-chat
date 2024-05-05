import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>
  ) {}

  async getMessagesHistory(
    senderId: number,
    receiverId: number
  ): Promise<any[]> {
    const messages = await this.messageRepository.find({
      where: [
        { sender: { id: senderId }, receiverId: receiverId },
        { sender: { id: receiverId }, receiverId: senderId },
      ],
      order: {
        timestamp: 'ASC',
      },
      relations: ['sender'],
    });

    return messages.map((message) => ({
      id: message.id,
      content: message.content,
      timestamp: message.timestamp,
      senderId: message.sender.id,
      receiverId: message.receiverId,
    }));
  }
}
