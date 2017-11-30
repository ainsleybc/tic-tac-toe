'use strict';

const TicTacToe = require('../src/ticTacToe.js').TicTacToe;

describe('TicTacToe', () => {

  var player1, player2, game, grid;

  beforeEach(() => {
    player1 = 'player1',
    player2 = 'player2',
    game    = new TicTacToe(player1, player2);
  })
  
  describe('constructor', () => {
    
    it('initializes with two players', () => {
      expect(game.players).toEqual([player1, player2]);
    })
    it('initializes with a game board', () => {
      grid = [['', '', ''], ['', '', ''], ['', '', '']];
      expect(game.grid).toEqual(grid);
    })

  })

  // describe('cross', () => {
    
  //   it('allows a field to be marked with a cross', () => {

  //     game.cross()
  //   })

  // })

})
