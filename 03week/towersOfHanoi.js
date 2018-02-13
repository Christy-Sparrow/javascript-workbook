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


const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


const movePiece = (startStack, endStack)=> {

  return stacks[endStack].push(stacks[startStack].pop());
};




const isLegal = (startStack, endStack) => {
  // heyo why doesnt this worrrrk
  if((stacks[endStack].length === 0) || ((stacks[endStack].length -1 )) > (stacks[startStack].length -1)) {
    return true;
  } else {
    return false;
  }


}

const checkForWin = () => {
// after moving pieces from stack A to B or C it checks against stack B or || stack C for a win otherwise returns false, no win.
   if ((stacks.b === [ 4, 3, 2, 1]) || (stacks.c === [ 4, 3, 2, 1])){
     return true;
     console.log("YASSS")
   } else {
     return false;
     console.log("NOOOOPE")
   }
}

const towersOfHanoi = (startStack, endStack) => {
  // Main function that contains all functions to run to play the game
    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack)
    }
    checkForWin() {
    console.log("You have built the tower")
    }



}

const getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();
