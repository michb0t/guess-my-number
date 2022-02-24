'use strict';

const again = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check")
const msg = document.querySelector(".message");
const score = document.querySelector(".score")
const hScore = document.querySelector(".highscore")

//Store randomised number into variable

let ranNum = generateNum();

//store original code in variables
const originalMsg = msg.textContent;
const originalScore = score.textContent;
const originalBG = document.body.style.backgroundColor; 

//Event listener runs function that will check if value is same as secret number
//If value = null, <1 or >20, alert error. 

checkBtn.addEventListener("click", function() {
    const currGuess = guess.value;

    if (currGuess === null || currGuess < 1 || currGuess > 20) {
        msg.textContent = "Number must be between 1 or 20. Guess";
    } else if (currGuess > ranNum) {
        msg.textContent = "Too High";
        score.textContent = `${score.textContent -= 1}`
    } else if (currGuess < ranNum) {
        msg.textContent = "Too Low";
        score.textContent = `${score.textContent -= 1}`
    } else {
        correctGuess();
    }
})

//Execute correct guess function

function correctGuess() {
    msg.textContent = "Correct!"
    document.body.style.backgroundColor = "green";
    if (score.textContent > hScore.textContent) {
        hScore.textContent = score.textContent;
    }
    number.textContent = ranNum;
    checkBtn.setAttribute("disabled", "true")
}

// reset button 

again.addEventListener("click",function() {
    msg.textContent = originalMsg;
    score.textContent = originalScore;
    document.body.style.backgroundColor = originalBG;
    checkBtn.removeAttribute("disabled", "false")
    ranNum = generateNum();
    number.textContent = "?"
    guess.value = ""
})

function generateNum() {
    return Math.floor(Math.random() * 20) + 1; 
}

