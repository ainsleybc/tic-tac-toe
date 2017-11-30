'use strict';

const TicTacToe = require('../src/ticTacToe.js').TicTacToe;

describe('TicTacToe', () => {
  
  describe('constructor', () => {
    
    it('initializes with two players', () => {
      var player1 = 'player1',
        player2   = 'player2',
        game      = new TicTacToe(player1, player2);
      expect(game.players).toEqual([player1, player2]);
    })

  })

})
