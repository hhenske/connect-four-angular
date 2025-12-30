import { Component, signal } from '@angular/core';
import { GameBoardComponent } from './components/board/game-board/game-board.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameBoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
