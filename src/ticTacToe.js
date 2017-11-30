'use strict';

class TicTacToe {

  constructor(player1, player2, size) {
    this.size = size;
    this.players = [player1, player2];
    this.grid = this._createGrid(size);
  }
  
  board() {
    return this.grid
  }
  
  select(row, column) {
    if (this.grid[row][column]) throw new Error('cell already selected');
    this.grid[row][column] = this.turn();
    this._nextTurn();
  }
  
  turn() {
    return this.players[0];
  }

  winner() {
    var winner;
    this.grid.forEach((row, rowIndex) => {
      row.forEach((cell, i) => {
        if (this._ticTacToe(rowIndex, i)) winner = cell;
      })
    })
    return winner;
  }

  _ticTacToe(r, c) {
    return (this._checkRows(r, c) || this._checkColumns(r, c) || this._checkDiagonals(r, c));
  }

  _checkRows(r, c) {
    var cell = this.grid[r][c];
    return (cell === this.grid[r][c + 1] && cell === this.grid[r][c + 2]);
  }

  _checkColumns(r, c) {
    var cell = this.grid[r][c];
    return (cell === this.grid[r + 1][c] && cell === this.grid[r + 2][c]);
  }

  _checkDiagonals(r, c) {
    var cell = this.grid[r][c];
    return (cell === this.grid[r + 1][c + 1] && cell === this.grid[r + 2][c + 2]);
  }
  
  _nextTurn() {
    this.players.reverse();
  }
  
  _createGrid(size) {
    var grid = [];
    for (var i = 0; i < size; i++) {
      grid.push(new Array(size));
    }
    return grid;
  }

}

exports.TicTacToe = TicTacToe;
