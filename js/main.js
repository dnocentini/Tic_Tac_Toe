/*playerOne wiil be "X" and playerTwo will be "O"*/
/*playerOne will 'click' in a square and "X" will appears inside the square clicked*/
/*return*/
/*anotherPlayerTurns*/
/*playerTwo will 'click' in a square and "X" will appears inside the square clicked*/
/*return*/
/*anotherPlayerTurns*/
/*the game will not return if a player does one of the winCombinations*/
/*the "winCombinations" is basically when the first player to get 3 of he/her marks in a row (up, down, across, or diagonally) is the winner.*/
/*when all 9 squares are full, the game is over.*/


/*----- constants -----*/
// const playerOne = "X"
// const playerTwo = "O"
const x = 1
const o = -1
const WinCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8 ],
    []

]

/*----- app's state (variables) -----*/
let gameBoardEl = document.getElementById ('game-board')

let sqClicked

/*----- cached element references -----*/


/*----- event listeners -----*/
gameBoardEl.addEventListener('click', handButtonClick);
}    


/*----- functions -----*/

function handButtonClick (evt) {
    console.log(evt.target.id); 



    

// document.querySelectorAll('evt')
//     .addEventListener('click', handButtonClick)

// document.getElementById('resetGame')
//     .addEventListener('click', handButtonClick)


