'use strict';

const TicTacToe = require('../src/ticTacToe.js').TicTacToe;

describe('TicTacToe', () => {

  var player1, player2, game, grid;

  beforeEach(() => {
    player1 = 'player1',
    player2 = 'player2',
    game    = new TicTacToe(player1, player2);
    grid = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined]
    ]
  })

  describe('constructor', () => {
    
    it('initializes with two players', () => {
      expect(game.players()).toEqual([player1, player2]);
    })
    it('initializes with a game board', () => {
      expect(game.board()).toEqual(grid);
    })
    it('can be given a size for the grid', () => {
      grid = [
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined]
      ]
      game = new TicTacToe(player1, player2, 4);
      expect(game.board()).toEqual(grid)
    })

  })

  describe('board', () => {
    
    it('shows the game board', () => {
      grid[0][0] = player1;
      game.select(0,0);      
      expect(game.board()).toEqual(grid);
    })

  })
  
  describe('select', () => {
    
    it('allows a field to be marked with a cross', () => {
      grid[0][0] = player1;
      game.select(0,0)
      expect(game.board()).toEqual(grid);
    })
    it('should not allow a field to be selected twice', () => {
      game.select(0);
      expect(() => { game.select(0) }).toThrowError('cell already selected');
    })

  })

  describe('turn', () => {
    
    it('shows the current turn', () => {
      game.select(0, 0);
      expect(game.turn()).toEqual(player2);
    })

  })

  describe('winner', () => {

    it('returns the winner of the game', () => {
      game.select(0, 0);
      game.select(1, 0);
      game.select(0, 1);
      game.select(1, 1);
      game.select(0, 2);
      expect(game.winner()).toEqual(player1);
    })

  })

})
