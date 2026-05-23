/// NUMBER GUESSING GAME = it generates a random number between 50 and 100, and the user has to guess it. The game provides feedback on whether the guess is too high, too low, or correct, and keeps track of the number of attempts.

const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running){

guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);

guess = Number(guess); 

if(isNaN(guess)){
    window.alert("Please enter a valid number");
}
else if(guess < minNum || guess > maxNum){
    window.alert("Please enter a number within the range!");
}
else{
    attempts++;

    if(guess < answer){
        window.alert("Too low! Try again.");
    }
    else if(guess > answer){
        window.alert("Too high! Try again.");
    }
    else{
        window.alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
        running = false;
    }
}

}