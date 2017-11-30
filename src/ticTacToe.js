'use strict';

class TicTacToe {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.grid = Array(3).fill(Array(3).fill(''));
  }
}

exports.TicTacToe = TicTacToe;
