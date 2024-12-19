import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-chat-input-form',
  imports: [FormsModule],
  templateUrl: './chat-input-form.component.html',
  styleUrl: './chat-input-form.component.scss',
})
export class ChatInputFormComponent implements OnInit {
  message = '';

  constructor(
    private chatService: ChatService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  sendMessage(): void {
    const userId = this.authService.getCurrentUserId();
    if (this.message.trim() && userId) {
      this.chatService.sendMessage({
        userId: userId,
        message: this.message,
      });
      this.message = '';
    }
  }
}
