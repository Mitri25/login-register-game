const playButton = document.getElementById("choice-submit-btn");
const rockRadio = document.getElementById("rock-radio-btn");
const paperRadio = document.getElementById("paper-radio-btn");
const scissorsRadio = document.getElementById("scissors-radio-btn");
let playerPoints = 0;
let computerPoints = 0;

const roundMessage = document.getElementById("round-message");


playButton.addEventListener("click", play);

function play(e) {
    e.preventDefault();
    // roundMessage.style.animation = "";
    // roundMessage.style.animation = "roundMessage 2s";
    roundMessage.classList.remove("roundMessage");
    roundMessage.classList.add("roundMessage");

    let playerChoice;
    let computerChoice;

    // player selection
    const playerWindow = document.getElementById("player-field");
    const playerSymbol = playerWindow.lastElementChild; // using DOM traversal for fun :D

    const playerImg = document.getElementById("player-img");

    if (rockRadio.checked) {
        console.log(rockRadio.value);
        playerChoice = rockRadio.value;
        playerImg.src = "/images/rock.jpg";
        playerSymbol.textContent = "ROCK";
    }
    else if (paperRadio.checked) {
        console.log(paperRadio.value);
        playerChoice = paperRadio.value;
        playerImg.src = "/images/paper.jpg";
        playerSymbol.textContent = "PAPER";
    }
    else if (scissorsRadio.checked) {
        console.log(scissorsRadio.value);
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
    console.log(computerChoice);

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
    const playerPointsDisplay = document.getElementById("player-points");
    const computerPointsDisplay = document.getElementById("computer-points");


    if (gameResult == "Computer +1 point") {
        computerPoints += 1;
        computerPointsDisplay.textContent = `COMPUTER: ${computerPoints} pts`;
        roundMessage.textContent = "You loose last round";
        roundMessage.style.color = "red";
    }
    else if (gameResult == "You +1 point") {
        playerPoints += 1;
        playerPointsDisplay.textContent = `YOU: ${playerPoints} pts`;
        roundMessage.textContent = "You won last round";
        roundMessage.style.color = "limegreen";
    }
    else {
        roundMessage.textContent = "Last round was a draw";
        roundMessage.style.color = "yellow";
    }

    roundMessage.style.textShadow = "black 0px 0px 8px";
    console.log(gameResult);


    // end of the game check
    const winnerMessage = document.getElementById("winner-message");
    const winnerMessageDecision = document.getElementById("winner-message-decision");
    const winnerMessageSummary = document.getElementById("winner-message-summary");

    if (playerPoints >= 3 || computerPoints >= 3) {
        if (playerPoints > computerPoints) {
            winnerMessageDecision.textContent = "Winner!";
            winnerMessageDecision.style.color = "limegreen";
            winnerMessageSummary.textContent = `You won the game ${playerPoints}:${computerPoints}`;
            console.log("Wiiiiiiiiiiiiiiiiiiiin");
        }
        else if (playerPoints < computerPoints) {
            winnerMessageDecision.textContent = "Looser!";
            winnerMessageDecision.style.color = "red";
            winnerMessageSummary.textContent = `You loose the game ${computerPoints}:${playerPoints}`;
            console.log("Lossssssssssssssssssssss");
        }

        winnerMessage.style.visibility = "visible";

    }

};
