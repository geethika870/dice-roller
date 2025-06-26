function rollDice() {
    const dice = document.getElementById('dice');
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if(randomNumber === 1) {
        dice.src = '1.png';
    }
    else if(randomNumber === 2) {
        dice.src = '2.png';
    }
    else if(randomNumber === 3) {
        dice.src = '3.png';
    }
    else if(randomNumber === 4) {
        dice.src = '4.png';
    }
    else if(randomNumber === 5) {
        dice.src = '5.png';
    }
    else if(randomNumber === 6) {
        dice.src = '6.png';
    }
}