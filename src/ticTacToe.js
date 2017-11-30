'use strict';

class TicTacToe {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.grid = Array(9);
  }

  select(field) {
    this.grid[field] = this.players[0];
    return this.grid;
  }

}

exports.TicTacToe = TicTacToe;
