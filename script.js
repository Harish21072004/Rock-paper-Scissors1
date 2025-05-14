console.log("Hello, World!");

function playGame() {
    let userScore;
    let computerScore;
    for(let i=0; i<5; i++) {
        userScore, computerScore = playRound();
    }
    if(userScore > computerScore) console.log("you win!");
    else if(userScore == computerScore) console.log("Draw");
    else console.log("you lose!")
}

function playRound() {
    let computerScore;
    let userScore;
    let computerChoice = getComputerChoice();
    function getComputerChoice() {
        let decidingVal = Math.random();
        let computerChoice;
        if (decidingVal < 0.3) {
            computerChoice = "rock";
        } else if (decidingVal < 0.6) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        return computerChoice;
    }

    let userChoice = getUserChoice();
    function getUserChoice() {
        let userChoice = prompt("Enter your choice (rock, paper, or scissors):");
        return userChoice.toLowerCase();
    }

    if(userChoice == "rock") {
        if(computerChoice == "paper") {
            computerScore++;
        } else {
            userScore++;
        }
    }

    else if(userChoice == "paper") {
        if(computerChoice == "rock") {
            userScore++;
        }else if(computerChoice == "scissors"){
            computerChoice++;
        }
    }

    else if(userChoice == "Scissors") {
        if(computerChoice == "rock") {
            computerScore++;
        } else if(computerChoice == "paper") {
            userChoice++;
        }
    }
    return computerScore, userScore;
}

playGame();