const player1 = "bi-android2"
const player2 = "bi-apple"
let round = 1;

const gameBoxes = [...document.querySelectorAll('.gameBox')];
gameBoxes.forEach(gameBox => gameBox.addEventListener('click', play))

function play(action){
    const gameTurn = round % 2 === 0 ? player2 : player1;
    action.target.classList.add(gameTurn);

    round++;
    checkGame();
}