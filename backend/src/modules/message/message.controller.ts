import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './message.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get('/history/:senderId/:receiverId')
  getMessagesHistory(
    @Param('senderId') senderId: number,
    @Param('receiverId') receiverId: number
  ) {
    return this.messagesService.getMessagesHistory(senderId, receiverId);
  }
}
