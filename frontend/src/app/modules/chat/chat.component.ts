import { Component, OnInit, inject } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

import { MessageHistoryComponent } from '../message-history/message-history.component';
import { MessageFormComponent } from '../message-form/message-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Message } from '../../interfaces/message.interface';

@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [
    CommonModule,
    MessageHistoryComponent,
    MessageFormComponent,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.less',
})
export class ChatComponent implements OnInit {
  private authService = inject(AuthService);
  public currentUser$ = this.authService.currentUser$;

  chatPartnerIdInput = '';
  chatPartnerId!: number;

  messages: Message[] = [];

  ngOnInit() {
    this.loadMessageHistory();
    this.authService.user().subscribe();
  }

  loadMessageHistory() {
    this.chatPartnerId = +this.chatPartnerIdInput;
  }
}
