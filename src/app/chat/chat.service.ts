import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private baseUrl = 'http://192.168.10.103:5000';
  private messagesSubject = new BehaviorSubject<any[]>([]);
  messages$ = this.messagesSubject.asObservable();

  constructor(private http: HttpClient, private socket: Socket) {
    this.socket.on('newMessage', (message: any) => {
      const currentMessages = this.messagesSubject.value;
      this.messagesSubject.next([...currentMessages, message]);
      console.log(message);
    });
  }

  initializeMessages(): void {
    this.http
      .get<any[]>(`${this.baseUrl}/api/v1/messages`)
      .subscribe((msgs) => {
        this.messagesSubject.next(msgs); // Set fetched messages to the BehaviorSubject
      });
  }

  sendMessage(message: { userId: number; message: string }): void {
    this.socket.emit('sendMessage', message);
  }
}
