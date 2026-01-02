import { Component, signal } from '@angular/core';
import { GameBoardComponent } from './components/board/game-board/game-board.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerIndicatorComponent } from "./components/board/player-indicator/player-indicator.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameBoardComponent, HeaderComponent, PlayerIndicatorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  
}
