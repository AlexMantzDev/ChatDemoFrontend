import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-chat-message',
  imports: [CommonModule],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss',
})
export class ChatMessageComponent implements OnInit {
  @Input() username!: string;
  @Input() color!: string;
  @Input() message!: string;
  @Input() userId!: number;

  isCurrentUser = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const currentUserId = this.authService.getCurrentUserId();
    this.isCurrentUser = this.userId === currentUserId;
  }
}
