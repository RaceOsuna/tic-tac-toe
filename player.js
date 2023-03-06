class Player {
  constructor(player, token) {
    this.id = player;
    this.token = token;
    this.wins = 0;
  }

  increaseWins() {
    this.wins += 1;
  }
}