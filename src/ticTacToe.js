'use strict';

(function (exports) {
  
  exports.TicTacToe = function (player1, player2, size = 3) {

    var _players = [player1, player2];
    var grid = _createGrid(size);
  
    function board() {
      return grid;
    }

    function players () {
      return _players;
    }
  
    function select (row, column) {
      if (grid[row][column]) throw new Error('cell already selected');
      grid[row][column] = turn();
      _nextTurn();
    }
  
    function winner() {
      return _ticTacToe()[0];      
    }

    function turn () {
      return _players[0];
    }
    
    function _nextTurn () {
      _players.reverse();
    }

    function _gameEnded() {
      return !!_ticTacToe();
    }

    function _ticTacToe(r, c) {
      var Lines = _winningLines();
      var winLine;
      for (var i = 0; i < Lines.length; i++) {
        if (!!Lines[i].reduce((a, b) => (a === b) ? a : NaN)) winLine = Lines[i];
        if (winLine) { break; }
      }
      return winLine;
    }

    function _winningLines() {
      var lines = [];
      lines.push(...grid) //rows
      lines.push(..._winningColumns())
      lines.push(..._winningDiagonals())
      return lines;
    }

    function _winningColumns() {
      var columns = [], column = [];
      for (var i = 0; i < size; i++) {
        for (var row = 0; row < size; row++) {
          column.push(grid[row][i])
        }
        columns.push(column); column = [];
      }
      return columns
    }

    function _winningDiagonals() {
      var diagonals = [];
      diagonals.push(_downAndRight());
      diagonals.push(_downAndLeft());
      return diagonals;
    }

    function _downAndRight() {
      var diagonal = [];
      for (var i = 0; i < size; i++) {
        diagonal.push(grid[i][i]);
      }
      return diagonal;
    }

    function _downAndLeft() {
      var diagonal = [];
      for (var i = 0; i < size; i++) {
        var col = (size - 1 - i);
        diagonal.push(grid[i][col]);
      }
      return diagonal;
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

