export type Player = {
    playerName: string;
    playerId: string;
    currentScore: number;
}

export type Game = {
    roomId: string;
    players: Player[];
    roundNumber: number;
    currentWord: string;
    playerTurn: number;
    roundStartTime: number;
}