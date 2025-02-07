function getComputerChoice() {
    randVal = Math.floor(Math.random() * 100) % 3

    numToChoice = {'0': 'rock', '1': 'paper', '2': 'scissors' }

    return numToChoice[randVal.toString()]
}

/* not the best input sanitation but you told me to preserve my effort haha*/
function getHumanChoice() {
    const validChoices = ['r', 'p', 's']
    let inputToChoice = {'r': 'rock', 's': 'scissors', 'p': 'paper'}
    let humanInput = prompt("Enter 'r' for rock, 'p' for paper, or 's' for scissors.")

    console.log('if you inputted the wrong thing, I will assume you chose rock')
    return validChoices.includes(humanInput) ? inputToChoice[humanInput.toLowerCase()] : 'rock';
}

function playRound(humanChoice, computerChoice) {
    winnerLegend = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'}

    if (winnerLegend[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        return 'h'
    }
    else if (winnerLegend[computerChoice] === humanChoice) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        return 'c'
    }
    else {
        console.log(`You both chose ${humanChoice}`);
        return 'd'
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        roundWinner = playRound(getHumanChoice(), getComputerChoice());

        if (roundWinner === 'h') humanScore++;
        if (roundWinner == 'c') computerScore++;
    }

    if (humanScore > computerScore) {
        console.log(`You won! ${humanScore}-${computerScore}`);
    } 
    else if (computerScore > humanScore) {
        console.log(`You lost. ${humanScore}-${computerScore}`);
    }
    else {
        console.log(`Draw. ${humanScore}-${computerScore}`);
    }

    return 'Game over!';
}
