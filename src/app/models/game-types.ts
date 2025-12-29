export type Player = 1 | 2;
export type CellValue = Player | 0; // 0 represents an empty cell
export type GameStatus = 'menu' | 'playing' | 'paused' | 'game-over';