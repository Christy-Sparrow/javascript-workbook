'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// prints the game board in the terminal with each different stack
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


const movePiece = (startStack, endStack)=> {
// this moves the piece from whatever stack you input and adds it to the stack you input
  return stacks[endStack].push(stacks[startStack].pop());
};




const isLegal = (startStack, endStack) => {
  // checks to see if the moved piece is correctly placed in the order within game rules of larger to smaller
  if((stacks[endStack].length === 0) || (stacks[endStack][stacks[endStack].length -1] > stacks[startStack][stacks[startStack].length -1])) {
    return true;
  } else {
    return false;
  }


}

const checkForWin = () => {
// after moving pieces from stack A to B or C it checks against stack B or || stack C for a win otherwise returns false, no win.
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
    console.log('YASSS')
  } else {
    return false;
    console.log('NOOOOPE')
  }
}

const towersOfHanoi = (startStack, endStack) => {
  // Main function that contains all functions to run to play the game
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
  }else{
    if(checkForWin()) {
      console.log('WINNNNNNN');
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      }
    }
  }
};




//
const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);

      getPrompt();
    });
  });
}

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to make valid moves', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an invalid input', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a valid input', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });

  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();
}

//
