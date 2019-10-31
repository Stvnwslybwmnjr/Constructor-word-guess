let Word= require("./word");
let inquirer= require("inquirer");

var alphabetArr = "abcdefghijklmnopqrstuvwxyz"

var wordBank = [
    "guitar",
    "amplifier",
    "drums",
    "bass",
    "piano",
    "microphone",
    "speaker"
];

let randomWord = Math.floor(Math.random() * wordBank.length);
let chosenWord = wordBank[randomWord];
let displayChosen = new Word(chosenWord);
console.log(displayChosen);
let nextword = false;
let rightguess = [];
let wrongguess = [];

let guessesLeft = 10;

function maingame() {
    if(nextword){
        let randomWord = Math.floor(Math.random() * wordBank.length);
        let chosenWord = wordBank[randomWord];
        let displayChosen = new Word(chosenWord);
        let nextword = false;
    }

}

let completedWord = [];

if (completedWord.includes(false)) {
    inquirer.prompt([{
        type: "input",
        message: "pick a single letter",
        name: "UserGuess"
    }])
    .then(function(input){
        if(!alphabetArr.includes(input) || input.length > 1){
            console.log("please enter a SINGLE LETTER")
            maingame();
        }

    })
}else{
    console.log("WINNER WINNER CHICKEN DINNER!")
}

