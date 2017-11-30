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
