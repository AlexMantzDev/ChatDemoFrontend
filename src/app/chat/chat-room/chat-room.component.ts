import { Component } from '@angular/core';
import { ChatInputFormComponent } from './chat-input-form/chat-input-form.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [ChatContainerComponent, ChatInputFormComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss',
})
export class ChatRoomComponent {
  chatHistory = [
    {
      userId: 1,
      username: 'Alex',
      color: '#ff0000',
      message: 'Hello World!',
    },
    {
      userId: 2,
      username: 'Becky',
      color: '#00ff00',
      message: 'hi!',
    },
    {
      userId: 3,
      username: 'Charlie',
      color: '#0000ff',
      message: 'o/',
    },
  ];

  renderMessage() {}
}
