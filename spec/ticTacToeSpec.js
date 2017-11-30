'use strict';

const TicTacToe = require('../src/ticTacToe.js').TicTacToe;

describe('TicTacToe', () => {

  var player1, player2, game, grid;

  beforeEach(() => {
    player1 = 'player1',
    player2 = 'player2',
    grid = Array(9); 
    game    = new TicTacToe(player1, player2);
  })
  
  describe('constructor', () => {
    
    it('initializes with two players', () => {
      expect(game.players).toEqual([player1, player2]);
    })
    it('initializes with a game board', () => {
      expect(game.grid).toEqual(grid);
    })

  })

  describe('select', () => {
    
    it('allows a field to be marked with a cross', () => {
      grid[0] = player1;
      expect(game.select(0)).toEqual(grid);
    })
    it('should not allow a field to be selected twice', () => {
      game.select(0);
      expect(() => { game.select(0) }).toThrowError('cell already selected');
    })

  })

  describe('turn', () => {
    
    it('shows the current turn', () => {
      game.select(0);
      expect(game.turn()).toEqual(player2);
    })

  })

})
