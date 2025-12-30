import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from '../column/column.component';


@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule, ColumnComponent],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent {
  columns = Array(7).fill(null);
}
