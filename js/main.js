/*xPlayer wiil be "X" and oPlayer will be "O"*/
/*xPlayer will 'click' in a square and "X" will appears inside the square clicked*/
/*return*/
/*anotherPlayerTurns*/
/*oPlayer will 'click' in a square and "O" will appears inside the square clicked*/
/*return*/
/*anotherPlayerTurns*/
/*the game will not return if a player does one of the winningCombinations*/
/*the "winningCombinations" is basically when the first player to get 3 of he/her marks in a row (up, down, across, or diagonally) is the winner.*/
/*when all 9 squares are full, the game is over.*/


/*----- constants -----*/
// const playerOne = "X"
// const playerTwo = "O"
const xPlayer = 1
const oPlayer = -1
const empty = 0
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
const maxTurns = 9;


/*----- app's state (variables) -----*/
var clickedSq, turn

var gameOver = false;
/*----- cached element references -----*/
gameBoardEl = document.getElementById('game-board');
resetGameBtn = document.getElementById('resetGame');
messageEl = document.getElementById('message');

/*----- event listeners -----*/
gameBoardEl.addEventListener('click', handleClick);
resetGameBtn.addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    turn = 1
    gameOver = false;
    messageEl.innerText = 'Good Luck!';
    for(i = 1; i <= 9; i ++) {
        document.getElementById(i.toString()).textContent = ''
    }
};


/* When xPlayer or oPlayer 'clicks' in a square, "X" or "O" will appears inside the square clicked*/
function handleClick(evt) {
    if (gameOver === true) {
        return;
    }
    evt.preventDefault();
    let clickedSq = evt.target;

    if(clickedSq.tagName !== 'TD' || clickedSq.textContent === 'X' || clickedSq.textContent === 'O' ) {
        return;
    }
    
    if ( turn %2 === 1) {
        clickedSq.textContent = 'X'
    } else {
        clickedSq.textContent = 'O'
    };

    turn += 1;
    checkGameState(); 

    // console.log(evt.target.textContent); 

};

function checkGameState() {
    if (verifyWinningCombinations() === true) {
        gameOver = true;
        messageEl.innerText = 'Winner!';
        return;
    };
    if (turn > maxTurns) {
        gameOver = true;
        messageEl.innerText = 'Tie!';
    };
};

function verifyWinningCombinations() {
    for (i = 0; i < winningCombinations.length; i ++) {
        let square0 = document.getElementById(winningCombinations[i][0].toString()).textContent;
        let square1 = document.getElementById(winningCombinations[i][1].toString()).textContent;
        let square2 = document.getElementById(winningCombinations[i][2].toString()).textContent;

        if (square0 === square1 && square0 === square2 && square0 !== '') {
            return true;
        }
    } 
    
    return false;
};




