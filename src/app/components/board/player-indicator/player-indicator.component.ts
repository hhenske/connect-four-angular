import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-player-indicator',
  standalone: true,
  templateUrl: './player-indicator.component.html',
  styleUrls: ['./player-indicator.component.scss']
})

export class PlayerIndicatorComponent {
  @Input() currentPlayer!: number;
}