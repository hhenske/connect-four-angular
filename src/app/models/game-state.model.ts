import { Player, CellValue, GameStatus } from './game-types';

export interface GameState {
    //board
    board: CellValue[][];

    //Turn management
    currentPlayer: Player;
    startingPlayer: Player;

    //Game status
    status: GameStatus;
    winner: Player | null; // null if no winner yet or draw

    //Scores (persist across rounds)
    scores: {
        player1: number;
        player2: number;
    };
};