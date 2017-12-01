'use strict';

(function (exports) {
  
  exports.TicTacToe = function (player1, player2, size = 3) {

    var _players = [player1, player2];
    var grid = _createGrid(size);
  
    function board () {
      return grid
    }

    function players () {
      return _players;
    }
  
    function select (row, column) {
      if (grid[row][column]) throw new Error('cell already selected');
      grid[row][column] = turn();
      _nextTurn();
    }
  
    function turn () {
      return _players[0];
    }
    
    function _nextTurn () {
      _players.reverse();
    }

    function winner () {
      var winner;
      grid.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
          if (_isTicTacToe(rowIndex, columnIndex)) winner = cell;
        })
      })
      return winner;
    }

    function _isTicTacToe (r, c) {
      return (_checkRows(r, c) || _checkColumns(r, c) || _checkDiagonals(r, c));
    }

    function _checkRows (r, c) {
      var cell = grid[r][c];
      return (cell === grid[r][c + 1] && cell === grid[r][c + 2]);
    }

    function _checkColumns (r, c) {
      var cell = grid[r][c];
      return (cell === grid[r + 1][c] && cell === grid[r + 2][c]);
    }

    function _checkDiagonals (r, c) {
      var cell = grid[r][c];
      return (cell === grid[r + 1][c + 1] && cell === grid[r + 2][c + 2]);
    }

    function _createGrid (size) {
      var grid = [];
      for (var i = 0; i < size; i++) {
        grid.push(new Array(size));
      }
      return grid;
    }

    return { select, board, turn, winner, players }

  }  

})(this)

