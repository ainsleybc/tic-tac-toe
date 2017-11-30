'use strict';

class TicTacToe {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.grid = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  crossField(row, column) {
    this.grid[row][column] = 'X';
    return this.grid;
  }

}

exports.TicTacToe = TicTacToe;
