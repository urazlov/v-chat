import { Observable, ReplaySubject, take } from 'rxjs';
import { Message } from '../interfaces/message.interface';
import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService implements OnDestroy {
  private socket!: Socket;
  private messages = new ReplaySubject<Message>(1);

  constructor(private authService: AuthService) {
    this.initSocket();
  }

  private initSocket(): void {
    this.authService
      .user()
      .pipe(take(1))
      .subscribe((user) => {
        this.socket = io('http://localhost:3000', {
          query: { userId: user.id.toString() },
        });

        this.socket.on('connect', () => {
          console.log('WebSocket connected');
        });

        this.socket.on('newMessage', (message: Message) => {
          this.messages.next(message);
        });
      });
  }

  sendMessage(message: {
    senderId: number;
    receiverId: number;
    content: string;
  }): void {
    if (this.socket && this.socket.connected) {
      this.socket.emit('sendMessage', message);
    }
  }

  getMessages(): Observable<Message> {
    return this.messages.asObservable();
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
