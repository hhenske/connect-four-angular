import { Injectable } from '@angular/core';
import { GameState } from '../models/game-state.model';
import { Player, CellValue } from '../models/game-types';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly ROWS = 6;
  private readonly COLS = 7;

  private state!: GameState;

  constructor() {
    this.startNewGame(1);
  }

  /** Public read-only access to state */
  get gameState(): GameState {
    return this.state;
  }

  /** Start a new round */
  startNewGame(startingPlayer: Player): void {
    this.state = {
      board: this.createEmptyBoard(),
      currentPlayer: startingPlayer,
      startingPlayer,
      status: 'playing',
      winner: null,
      scores: this.state?.scores ?? {
        player1: 0,
        player2: 0
      }
    };
  }

  /** Create a 6x7 empty board */
  private createEmptyBoard(): CellValue[][] {
    return Array.from({ length: this.ROWS }, () =>
      Array(this.COLS).fill(0)
    );
  }
}
