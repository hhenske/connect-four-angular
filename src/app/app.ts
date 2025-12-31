import { Component, signal } from '@angular/core';
import { GameBoardComponent } from './components/board/game-board/game-board.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameBoardComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  
}
