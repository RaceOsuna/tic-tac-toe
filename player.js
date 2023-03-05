class Player {
  constructor(player, token) {
    this.id = player
    this.token = token;
    this.wins = 0;
  }

  increaseWins(winner) {
    winner.wins += 1
  }
}