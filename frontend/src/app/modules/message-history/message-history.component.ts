import {
  Component,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../interfaces/message.interface';
import { MessageService } from '../../services/message.service';
import { SocketService } from '../../services/socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-history.component.html',
  styleUrl: './message-history.component.less',
})
export class MessageHistoryComponent implements OnInit, OnDestroy, OnChanges {
  private messageService = inject(MessageService);
  private socketService = inject(SocketService);
  private zone = inject(NgZone);
  private messagesSubscription!: Subscription;

  messages: Message[] = [];

  @Input() currentUserId!: number;
  @Input() chatPartnerId!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chatPartnerId'].currentValue) {
      console.log(this.chatPartnerId, 'CHAT PARTNER');
      this.loadMessageHistory();
    }
  }

  ngOnInit() {
    this.subscribeToNewMessages();
  }

  loadMessageHistory() {
    this.messageService
      .getMessagesHistory(this.currentUserId, this.chatPartnerId)
      .subscribe({
        next: (messages) => {
          this.zone.run(() => {
            console.log(messages);
            this.messages = messages;
          });
        },
        error: (error) => console.error('Error loading messages', error),
      });
  }

  subscribeToNewMessages() {
    this.messagesSubscription = this.socketService
      .getMessages()
      .subscribe((message: Message) => {
        this.zone.run(() => {
          this.messages.push(message);
        });
      });
  }

  ngOnDestroy() {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }
}
