import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { CommonModule } from '@angular/common';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { AuthService } from '../../../auth/auth.service';
import { Message } from '../../../models/Message';

@Component({
  selector: 'app-chat-container',
  imports: [CommonModule, ChatMessageComponent],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss',
})
export class ChatContainerComponent implements OnInit {
  messages: Message[] = [];
  currentUserId!: number;

  constructor(
    private chatService: ChatService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      this.currentUserId = userId;
    }
    this.chatService.initializeMessages();
    this.chatService.messages$.subscribe((newMessages) => {
      this.messages = newMessages;
    });
  }
}
