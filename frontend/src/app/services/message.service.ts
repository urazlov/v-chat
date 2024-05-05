import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private baseUrl = 'http://localhost:3000/api/messages';

  constructor(private http: HttpClient) {}

  getMessagesHistory(
    senderId: number,
    receiverId: number
  ): Observable<Message[]> {
    return this.http.get<Message[]>(
      `${this.baseUrl}/history/${senderId}/${receiverId}`
    );
  }
}
