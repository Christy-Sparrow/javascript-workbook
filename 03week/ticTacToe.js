'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // compare horizontal pattern for win
  return Board(
    board [0][0] === playerTurn && board [0][0] === playerTurn && board [0][2] === playerTurn
    ||
    board [1][0] === playerTurn && board [1][1] === playerTurn && board [1][2] === playerTurn
    ||
    board [2][0] === playerTurn && board [2][2] === playerTurn && board [2][2] === playerTurn
  );
}

function verticalWin() {
  // Your code here
  return Board(
    board [0][0] === playerTurn && board [1][0] === playerTurn && board [2][0] === playerTurn
    ||
    board [0][1] === playerTurn && board [1][1] === playerTurn && board [2][1] === playerTurn
    ||
    board [0][2] === playerTurn && board [1][2] === playerTurn && board [2][2] === playerTurn
  );
}

function diagonalWin() {
  // Your code here
  return Board(
    board [0][0] === playerTurn && board [1][1] === playerTurn && board [2][2] === playerTurn
    ||
    board [2][0] === playerTurn && board [1][1] === playerTurn && board [0][2] === playerTurn

  );
}

function checkForWin() {
  // Your code here
  if ( horizontalWin() || verticalWin() || diagonalWin() ) {
    console.log('Player ' + ' Wins the game!');
}

function ticTacToe(row, column) {
  // Your code here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
