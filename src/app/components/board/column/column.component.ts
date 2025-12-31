import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CellComponent } from './cell/cell.component';


@Component({
  selector: 'app-column',
  standalone: true,
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  imports: [CellComponent]
})

export class ColumnComponent {
  @Input() columnIndex!: number;

  rows = Array(6).fill(0);
}
