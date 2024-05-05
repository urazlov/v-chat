import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from '../../services/socket.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.less',
})
export class MessageFormComponent {
  private socketService = inject(SocketService);
  messageContent = '';
  @Input() senderId!: number;
  @Input() receiverId!: number;

  sendMessage() {
    if (!this.messageContent.trim()) {
      return;
    }
    this.socketService.sendMessage({
      senderId: this.senderId,
      receiverId: this.receiverId,
      content: this.messageContent,
    });
    this.messageContent = '';
  }
}
