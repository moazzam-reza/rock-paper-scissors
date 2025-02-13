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


let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    winnerLegend = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'}
    let event = new CustomEvent('roundPlayed', {detail: {humanChoice: humanChoice.toUpperCase(), computerChoice: computerChoice.toUpperCase()}});

    if (winnerLegend[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        event.detail.winner = 'human';
        humanScore += 1;
    }
    else if (winnerLegend[computerChoice] === humanChoice) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        event.detail.winner = 'computer';
        computerScore += 1;
    }
    else {
        console.log(`You both chose ${humanChoice}`);
        event.detail.winner = 'draw';
    }
    let scoreboardTemp = document.querySelector("#scoreboard");
    scoreboardTemp.dispatchEvent(event);
}

const buttons = document.querySelector("#buttons");
buttons.addEventListener('mouseup', (e) => {
    console.log(e.target.textContent)
    let humanChoice = e.target.textContent.toLowerCase();
    playRound(humanChoice, getComputerChoice());
})

const scoreboard = document.querySelector("#scoreboard");
scoreboard.addEventListener('roundPlayed', (e) => {
    scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    const outcome = document.querySelector("#outcome");
    if (humanScore == 5 || computerScore == 5) {
        outcome.textContent = `${e.detail.winner.toUpperCase()} WINS. ${humanScore}-${computerScore} final score. You chose ${e.detail.humanChoice} and
        computer chose ${e.detail.computerChoice}.`
        humanScore = 0;
        computerScore = 0;
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    } 
    else if (e.detail.winner == 'draw') {
        outcome.textContent = `Draw. You both chose ${e.detail.humanChoice}.`;
    }
    else if (e.detail.winner == 'human') {
        outcome.textContent = `You chose ${e.detail.humanChoice} and computer chose ${e.detail.computerChoice}. +1 point for YOU.`;
    }
    else if (e.detail.winner == 'computer') {
        outcome.textContent = `You chose ${e.detail.humanChoice} and computer chose ${e.detail.computerChoice}. +1 point for COMPUTER.`;
    }
})

