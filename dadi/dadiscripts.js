const min = 1;
const max = 6;

// PLAYER
const numberPlayer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('numberPlayer', numberPlayer, typeof numberPlayer )

// COMPUTER
const numberComputer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('numberComputer', numberComputer, typeof numberComputer )

const playButton = document.getElementById('button');
console.log ('playButton', playButton, typeof playButton); 



playButton.addEventListener('click', function() {


if (numberPlayer > numberComputer) {
    const resultGame = document.querySelector('#result');
    result.innerHTML = ('You won');
}

else if (numberPlayer < numberComputer) {
    result.innerHTML = ('You lost');
}

else if (numberComputer == numberPlayer) {
    result.innerHTML = (`It's a draw`); 
}

});