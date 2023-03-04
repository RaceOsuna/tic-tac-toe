class Game {
  constructor(playerOne, playerTwo) {
    this.player1 = playerOne
    this.player2 = playerTwo
    this.isWin = false
    this.isDraw = false
    this.board = [0, 1, 2, 
                  3, 4, 5, 
                  6, 7, 8]
    this.moves = 0;
    this.played = []
    if (this.moves % 2 === 0) {
      this.turn = this.player1
  } else {
      this.turn = this.player2
  }
  }
  
switchTurns() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
  } else {
      this.turn = this.player1;
  }
  return
}

checkWinAcross() {
  for (var i = 0; i < this.board.length; i++) {
  if (this.board[i] === this.board[i+1] && this.board[i] === this.board[i+2]) {
    return this.win = true
    }
  }
}

checkWinDown() {
  for (var i = 0; i < this.board.length; i++) {
    if (this.board[0] === this.board[i+3] && this.board[i] === this.board[i+6]) {
      return this.win = true
    }    
  }
}

checkWinDiagonal() {
  for (var i = 0; i < this.board.length; i++) {
  if (this.board[0] === this.board[4] && this.board[0] === this.board[8]) {
    return true
} else if (this.board[2] === this.board[4] && this.board[2] === this.board[6]) {
      return this.win = true
    }
  }
}

checkForDraw() {
  if (this.moves === 9)
    return this.isDraw = true
}

checkAllWins() {
  if (this.checkWinAcross() || this.checkWinDown() || this.checkWinDiagonal()) {
    return this.isWin = true
  }
}

trackWins() {
  this.player1.wins++
}


}