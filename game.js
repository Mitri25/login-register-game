
const playButton = document.getElementById("choice-submit-btn");
const rockRadio = document.getElementById("rock-radio-btn");
const paperRadio = document.getElementById("paper-radio-btn");
const scissorsRadio = document.getElementById("scissors-radio-btn");
const roundMessage = document.getElementById("round-message");
const winnerMessage = document.getElementById("winner-message");

let playerPoints = 0;
let computerPoints = 0;
let gameOver = false;

playButton.addEventListener("click", play);

function play(e) {
    e.preventDefault();

    // animation did not worked repeatedly so I made this...
    // I tried to use addClass / removeClass for animation also didn't worked...
    const opacity = setInterval(changeOpacity, 50);
    let startingOpacity = 0.2;

    function changeOpacity() {
        let opacityIncrease = 0.05;
        startingOpacity += opacityIncrease;
        roundMessage.style.opacity = startingOpacity.toString();
        if (roundMessage.style.opacity >= 1) {
            clearInterval(opacity);
        }
    };


    // player selection
    let playerChoice;
    let computerChoice;

    const playerWindow = document.getElementById("player-field");
    const playerSymbol = playerWindow.lastElementChild; // using DOM traversal for fun :D

    const playerImg = document.getElementById("player-img");

    if (rockRadio.checked) {
        playerChoice = rockRadio.value;
        playerImg.src = "/images/rock.jpg";
        playerSymbol.textContent = "ROCK";
    }
    else if (paperRadio.checked) {
        playerChoice = paperRadio.value;
        playerImg.src = "/images/paper.jpg";
        playerSymbol.textContent = "PAPER";
    }
    else if (scissorsRadio.checked) {
        playerChoice = scissorsRadio.value;
        playerImg.src = "/images/scissors.jpg";
        playerSymbol.textContent = "SCISSORS";
    }
    else {
        window.alert("select rock / paper / scissors");
        return;
    };


    // computer random selection
    const computerWindow = document.getElementById("computer-field");
    const computerSymbol = computerWindow.lastElementChild; // using DOM traversal for fun :D

    const computerImg = document.getElementById("computer-img");

    computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            computerImg.src = "/images/rock.jpg";
            computerSymbol.textContent = "ROCK";
            break;
        case 1:
            computerChoice = "paper";
            computerImg.src = "/images/paper.jpg";
            computerSymbol.textContent = "PAPER";
            break;
        case 2:
            computerChoice = "scissors";
            computerImg.src = "/images/scissors.jpg";
            computerSymbol.textContent = "SCISSORS";
            break;
    };


    // checking winner of the round
    let gameResult = checkWinner();

    function checkWinner() {
        if (playerChoice == computerChoice) {
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
    const playerPointsDisplay = document.getElementById("player-points");
    const computerPointsDisplay = document.getElementById("computer-points");

    if (gameResult == "Computer +1 point") {
        computerPoints += 1;
        computerPointsDisplay.textContent = `COMPUTER: ${computerPoints} pts`;
        roundMessage.textContent = "You lost the last round";
        roundMessage.style.color = "red";
    }
    else if (gameResult == "You +1 point") {
        playerPoints += 1;
        playerPointsDisplay.textContent = `YOU: ${playerPoints} pts`;
        roundMessage.textContent = "You won the last round";
        roundMessage.style.color = "limegreen";
    }
    else {
        roundMessage.textContent = "Last round was a draw";
        roundMessage.style.color = "yellow";
    }

    roundMessage.style.textShadow = "black 0px 0px 8px";
    console.log(gameResult);


    // end of the game check
    const winnerMessageDecision = document.getElementById("winner-message-decision");
    const winnerMessageSummary = document.getElementById("winner-message-summary");

    if (playerPoints >= 3 || computerPoints >= 3) {
        if (playerPoints > computerPoints) {
            winnerMessageDecision.textContent = "Winner!";
            winnerMessageDecision.style.color = "limegreen";
            winnerMessageSummary.textContent = `You won the game ${playerPoints}:${computerPoints}`;
            console.log("Win");
        }
        else if (playerPoints < computerPoints) {
            winnerMessageDecision.textContent = "Looser!";
            winnerMessageDecision.style.color = "red";
            winnerMessageSummary.textContent = `You loose the game ${computerPoints}:${playerPoints}`;
            console.log("Loss");
        }

        winnerMessage.style.visibility = "visible";
        playButton.value = "Play again";
        playButton.style.backgroundColor = "orange";
        gameOver = true;
    }


    // restart game
    if (gameOver) {
        playButton.removeEventListener("click", play);
        playButton.addEventListener("click", restartGame);  // restart works also without this, but refreshes page...
    }

    const radioButtons = document.getElementsByName("player-choice");

    function restartGame(e) {
        e.preventDefault();
        console.log("restarting game");

        // resetting all values
        winnerMessage.style.visibility = "hidden";
        playButton.value = "   PLAY   ";
        playButton.style.backgroundColor = "greenyellow";
        playerPoints = 0;
        playerPointsDisplay.textContent = `YOU: ${playerPoints} pts`;
        computerPoints = 0;
        computerPointsDisplay.textContent = `COMPUTER: ${computerPoints} pts`;
        roundMessage.textContent = "start first round in best of 5 game";
        roundMessage.style.textShadow = "none";
        roundMessage.style.color = "gray";
        playerImg.src = "/images/rock.jpg";
        playerSymbol.textContent = "ROCK";
        computerImg.src = "/images/rock.jpg";
        computerSymbol.textContent = "ROCK";
        playButton.removeEventListener("click", restartGame);
        playButton.addEventListener("click", play);
        resetRadionButtons(radioButtons);
        gameOver = false;
    }

    // deselecting all radio buttons
    function resetRadionButtons(array) {
        array.forEach(element => {
            element.checked = false;
        });
    }
};

