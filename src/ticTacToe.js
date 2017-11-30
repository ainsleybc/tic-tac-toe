'use strict';

class TicTacToe {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.grid = Array(9);
  }

  select(field) {
    this.grid[field] = this.turn();
    this.nextTurn();
    return this.grid;
  }

  turn() {
    return this.players[0];
  }

  nextTurn() {
    this.players.reverse();
  }

}

exports.TicTacToe = TicTacToe;
