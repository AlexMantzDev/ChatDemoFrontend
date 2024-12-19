import { Component } from '@angular/core';
import { ChatInputFormComponent } from './chat-input-form/chat-input-form.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';

@Component({
  selector: 'app-chat-room',
  imports: [ChatContainerComponent, ChatInputFormComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss',
})
export class ChatRoomComponent {}
