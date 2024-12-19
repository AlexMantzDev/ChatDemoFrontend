import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ChatRoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ChatDemo';
}
