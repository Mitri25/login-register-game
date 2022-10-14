const playButton = document.getElementById("choice-submit-btn");
const rockRadio = document.getElementById("rock-radio-btn");
const paperRadio = document.getElementById("paper-radio-btn");
const scissorsRadio = document.getElementById("scissors-radio-btn");
let playerPoints = 0;
let computerPoints = 0;


playButton.addEventListener("click", play);

function play(e) {
    e.preventDefault();
    let playerChoice;
    let computerChoice;

    // player selection
    if (rockRadio.checked) {
        console.log(rockRadio.value);
        playerChoice = rockRadio.value;
    }
    else if (paperRadio.checked) {
        console.log(paperRadio.value);
        playerChoice = paperRadio.value;
    }
    else if (scissorsRadio.checked) {
        console.log(scissorsRadio.value);
        playerChoice = scissorsRadio.value;
    }
    else {
        window.alert("select rock / paper / scissors");
        return;
    };

    // computer random selection
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    };


    // checking winner
    let gameResult = checkWinner();

    function checkWinner() {
        if (playerChoice == computerChoice) {
            console.log("DRAW");
            return "draw";
        }
        else if (playerChoice == "rock") {
            if (computerChoice == "paper") {
                return "Computer +1 point";
            }
            else {
                return "You +1 point";
            }
        }
        else if (playerChoice == "paper") {
            if (computerChoice == "scissors") {
                return "Computer +1 point";
            }
            else {
                return "You +1 point";
            }
        }
        else if (playerChoice == "scissors") {
            if (computerChoice == "rock") {
                return "Computer +1 point";
            }
            else {
                return "You +1 point";
            }
        }
    }

    // adding points to winner
    playerPointsDisplay = document.getElementById("player-points");
    computerPointsDisplay = document.getElementById("computer-points");

    if (gameResult == "Computer +1 point") {
        computerPoints += 1;
        computerPointsDisplay.textContent = `COMPUTER: ${computerPoints} pts`;
    }
    else if (gameResult == "You +1 point") {
        playerPoints += 1;
        playerPointsDisplay.textContent = `YOU: ${playerPoints} pts`;
    }
    console.log(gameResult);



};