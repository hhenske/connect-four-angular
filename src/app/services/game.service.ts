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

  dropPiece(columnIndex: number): void {
    if (this.state.status !== 'playing') return;

    const rowIndex = this.findAvailableRow(columnIndex);
    if (rowIndex === -1) return;

    this.state.board[rowIndex][columnIndex] = this.state.currentPlayer;

    if (this.checkWin(rowIndex, columnIndex)) {
      this.handleWin();
    } else {
      this.switchPlayer();
    }
  }

  /** Find the lowest available row in a column */
  private findAvailableRow(columnIndex: number): number {
    for (let row = this.ROWS - 1; row >= 0; row--) {
      if (this.state.board[row][columnIndex] === 0) {
        return row;
      }
    }
    return -1;
  }

  /** Switch to the other player */
  private switchPlayer(): void {
    this.state.currentPlayer = this.state.currentPlayer === 1 ? 2 : 1;
  }

  /** Handle win condition */
  private handleWin(): void {
    const winner = this.state.currentPlayer;

    this.state.status = 'game-over';
    this.state.winner = winner;

    if (winner === 1) {
      this.state.scores.player1 += 1;
    } else {
      this.state.scores.player2 += 1;
    }
  }

  /** Check for a win condition */
  private checkWin(rowIndex: number, columnIndex: number): boolean {
    const player = this.state.currentPlayer;

    return (
      this.countConnected(rowIndex, columnIndex, 0, 1, player) >= 4 || // horizontal
      this.countConnected(rowIndex, columnIndex, 1, 0, player) >= 4 || // vertical
      this.countConnected(rowIndex, columnIndex, 1, 1, player) >= 4 || // diagonal ↘
      this.countConnected(rowIndex, columnIndex, 1, -1, player) >= 4   // diagonal ↙
    );
  }

  private countConnected(
    row: number,
    col: number,
    rowDir: number,
    colDir: number,
    player: number
  ): number {
    let count = 1;

    count += this.countDirection(row, col, rowDir, colDir, player);
    count += this.countDirection(row, col, -rowDir, -colDir, player);

    return count;
  }

  private countDirection(
    row: number,
    col: number,
    rowDir: number,
    colDir: number,
    player: number
  ): number {
    let r = row + rowDir;
    let c = col + colDir;
    let count = 0;

    while (
      r >= 0 &&
      r < this.ROWS &&
      c >= 0 &&
      c < this.COLS &&
      this.state.board[r][c] === player
    ) {
      count++;
      r += rowDir;
      c += colDir;
    }

    return count;
  }
}
