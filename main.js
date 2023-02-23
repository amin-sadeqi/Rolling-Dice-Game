'use strict'
console.log('amin')

const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const score0El = document.querySelector('#score-0');
const score1El = document.getElementById('score-1');
const curScore0El = document.querySelector('.current-0');
const curScore1El = document.querySelector('.current-1');
const diceEl = document.querySelector('.dice');
const newGameBtn = document.querySelector('.new-game')
const roleDiceBtn = document.querySelector('.role-dice')
const holdBtn = document.querySelector('.hold')

let currentScore, activePlayer, scores, playGame;

const init = function () {
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playGame = true;
    diceEl.classList.add('hidden');
    curScore0El.textContent = 0;
    curScore1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.remove('player-winner');
    player1El.classList.remove('player-winner');
    if (player0El.classList.contains !== 'player-active') {
        player1El.classList.remove('player-active');
        player0El.classList.add('player-active');
    }
}

init();


roleDiceBtn.addEventListener('click', function () {
    if (playGame) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `images/Alea${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`.current-${activePlayer}`).textContent = currentScore;

        } else {
            document.querySelector(`.current-${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer = (activePlayer === 0) ? 1 : 0;
            player0El.classList.toggle('player-active');
            player1El.classList.toggle('player-active');

        }
    }
})


holdBtn.addEventListener('click', function () {
    if (playGame) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
        if ((scores[activePlayer]) >= 100) {
            document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
            playGame = false;
            diceEl.classList.add('hidden');
        } else {
            currentScore = 0;
            document.querySelector(`.current-${activePlayer}`).textContent = currentScore;
            activePlayer = (activePlayer === 0) ? 1 : 0;
            player0El.classList.toggle('player-active');
            player1El.classList.toggle('player-active');
        }
    }

})


newGameBtn.addEventListener('click', init)





