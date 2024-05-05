import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ChatComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less',
})
export class MainComponent {}
