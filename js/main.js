/*playerOne wiil be "X" and playerTwo will be "O"*/
/*playerOne will click in a square and "X" will appears inside the square clicked*/
/*return*/
/*anotherPlayerTurns*/
/*playerTwo will click in a square and "X" will appears inside the square clicked*/
/*return*/
/*anotherPlayerTurns*/
/*the game will not return if a player does one of the winCombinations*/
/*the "winCombinations" is basically whe the first player to get 3 of he/her marks in a row (up, down, across, or diagonally) is the winner.*/
/*when all 9 squares are full, the game is over.*/



// 1) Define required constants
// const playerOne = "X"
// const playerTwo = "O"

const x = 1
const o = -1
const WinCombinations = [
    [sq0, sq1, sq2],
    [sq3, sq4, sq ]

]

// 2) Define required variables used to track the state of the game
let sqClicked

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square



// 6) Handle a player clicking the replay button



// document.querySelectorAll('evt')
//     .addEventListener('click', handButtonClick)

// document.getElementById('resetGame')
//     .addEventListener('click', handButtonClick)

document.getElementsByTagName('table')
    .addEventListener('click', handButtonClick)    
    console.log(document.getElementsByTagName('table');