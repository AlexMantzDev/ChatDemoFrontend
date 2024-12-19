import { Routes } from '@angular/router';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/chat-room', pathMatch: 'full' },
  { path: 'chat-room', component: ChatRoomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
