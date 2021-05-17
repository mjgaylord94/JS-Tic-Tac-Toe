let cells = document.querySelectorAll(`.row > div`);
let topRow = document.querySelectorAll(`.top`);
let centerRow = document.querySelectorAll(`.center`);
let bottomRow = document.querySelectorAll(`.bottom`);
let leftColumn = document.querySelectorAll(`.left`);
let middleColumn = document.querySelectorAll(`.middle`);
let rightColumn = document.querySelectorAll(`.right`);
let downDiagonal = [cells[0], cells[4], cells[8]];
let upDiagonal = [cells[6], cells[4], cells[2]]
let display = document.querySelector(`.display`)
let button = document.querySelector(`button`)

let clickCounter = 0;
let gameWon = false;


//loop to allow cells to become interactable
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
};

//allows button to become interactable
button.addEventListener('click', buttonClicked);


// Each click on a cell will check the clickCounter and if the cell is empty.  
// If empty and even, clicks print 'X'.  If empty and odd, clicks print 'O'.
// After placing the correct symbol, the checkForWin function runs.
function cellClicked(e) {

    if (clickCounter % 2 == 0 && e.target.textContent == ``) {
        e.target.textContent = `X`;
        clickCounter++;
        display.textContent = `O's Turn.`
    }
    else if (clickCounter % 2 == 1 && e.target.textContent == ``) {
        e.target.textContent = `O`;
        clickCounter++;
        display.textContent = `X's Turn.`
    }

    checkForWin()
    
};

//Function to Check to see if Game has Won.
//This function inputs all the possible groupings as arguments of the checkForThree function
//After checking for a win, the function checks to see if the game board is full. If so, the game is a scratch.
function checkForWin() {
    
        checkForThree(topRow);
        checkForThree(centerRow);
        checkForThree(bottomRow);
        checkForThree(leftColumn);
        checkForThree(middleColumn);
        checkForThree(rightColumn);
        checkForThree(downDiagonal);
        checkForThree(upDiagonal);

    if (gameWon == false && clickCounter == 9) {
        gameWon = true;
        display.textContent = `Scratch! Cat Won!`
    }

};

//Function to Check whether each possible grouping of Three has either all X's or all O's
// If a game has been won, gameWon variable = true and the correct text is displayed.
function checkForThree(groupOfThree) {

    if (groupOfThree[0].textContent == `X` && groupOfThree[1].textContent == `X` && groupOfThree[2].textContent == `X`) {
        gameWon = true;
        display.textContent = `X Won!`;
    }
    else if (groupOfThree[0].textContent == `O` && groupOfThree[1].textContent == `O` && groupOfThree[2].textContent == `O`) {
        gameWon = true;
        display.textContent = `O Won!`;
    };

};

// Function that allows board to be reset upon button click.
function buttonClicked() {
    
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = ``
    };
    gameWon = false
    clickCounter = 0
    contentLengthCounter = 0
    display.textContent = `X's Turn.`
}
