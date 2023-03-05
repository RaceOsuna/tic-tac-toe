class Game {
  constructor(playerOne, playerTwo) {
    this.player1 = playerOne
    this.player2 = playerTwo
    this.turn = this.player1
    this.gamesPlayed = 0
    this.canPlay = true
    this.winner = undefined
    this.board = [0, 1, 2, 
                  3, 4, 5, 
                  6, 7, 8]
    this.moves = 0;
  }
  
switchTurns() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
  } else {
      this.turn = this.player1;
  }
}

winAcross() {
  for (var i = 0; i < this.board.length; i++) {
    if (this.board[0] === this.board[1] && this.board[0] === this.board[2]) {
     return true 
  } else if (this.board[3] === this.board[4] && this.board[3] === this.board[5]) {
     return true 
  } else if (this.board[6] === this.board[7] && this.board[6] === this.board[8]) {
     return true 
    }
  }
}

winDown() {
  for (var i = 0; i < this.board.length; i++) {
    if (this.board[0] === this.board[3] && this.board[0] === this.board[6]) {
     return true 
  } else if (this.board[1] === this.board[4] && this.board[1] === this.board[7]) {
     return true 
  } else if (this.board[2] === this.board[5] && this.board[2] === this.board[8]) {
     return true 
  }  
  }
}

winDiagonal() {
  for (var i = 0; i < this.board.length; i++) {
    if (this.board[0] === this.board[4] && this.board[0] === this.board[8]) {
     return true 
  } else if (this.board[2] === this.board[4] && this.board[2] === this.board[6]) {
     return true 
    }
  }
}

checkForDraw() {
  console.log(this.moves, this.winner)
  if (this.moves === 9 && this.winner === undefined) {
    this.winner = "draw";
    return true 
  }
}

checkAllWins() {
    this.moves += 1
  if (game.winAcross() || game.winDown() || game.winDiagonal()) {
    this.gamesPlayed += 1;
    this.winner = this.turn;
    this.winner.wins += 1;
    }
  }
}