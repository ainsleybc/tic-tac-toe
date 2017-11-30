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
      row.forEach((cell, cellIndex) => {
        if (cell === this.grid[rowIndex][cellIndex + 1] && cell === this.grid[rowIndex][cellIndex + 2]) {
          winner = cell;
        } else if (cell === this.grid[rowIndex + 1][cellIndex] && cell === this.grid[rowIndex + 2][cellIndex]) {
          winner = cell;
        } else if (cell === this.grid[rowIndex + 1][cellIndex + 1] && cell === this.grid[rowIndex + 2][cellIndex + 2]) {
          winner = cell;
        } else {
          return;
        }
      })
    })
    return winner;
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
