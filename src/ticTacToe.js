'use strict';

class TicTacToe {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.grid = Array(9);
  }

  board() {
    return this.grid;
  }

  select(field) {
    if (this.grid[field]) throw new Error('cell already selected');
    this.grid[field] = this.turn();
    this.nextTurn();
  }

  turn() {
    return this.players[0];
  }

  nextTurn() {
    this.players.reverse();
  }

}

exports.TicTacToe = TicTacToe;
