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
// console.log("LINE 19")
// console.log(displayChosen);
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

    // console.log("MainGame Check 1 good!")
    let completedWord = [];
    displayChosen.word.forEach(completeCheck)
    
    if (completedWord.includes(false)) {
        // console.log("MainGame Check 2 good!")
        inquirer.prompt([{
            type: "input",
            message: "pick a single letter",
            name: "UserGuess"
        }])
        .then(function(input){
            // console.log("WHAT THE HELL IS THIS INPUT?")
            // console.log(input)
            // console.log("MainGame Check 3 good!")
            if(!alphabetArr.includes(input.UserGuess) || input.UserGuess.length > 1){
                console.log("please enter a SINGLE LETTER")
                maingame();
                // console.log("MainGame Check 4 good!")
            }else{
                // console.log("MainGame Check 5 good!")
                if(wrongguess.includes(input.UserGuess) || rightguess.includes(input.UserGuess) || input.UserGuess === ""){
                    console.log("Guess a new letter!")
                    maingame();
                }else {
                    var wordCheckArr = [];
                    displayChosen.guess(input.UserGuess);
                    displayChosen.word.forEach(completeCheck);

                    if(wordCheckArr.join("") === completedWord.join("")){
                        console.log("Wrong!");
                        wrongguess.push(input.UserGuess);
                        guessesLeft--;
                    }else{
                        console.log("You are Correct Sir! YES!")
                        rightguess.push(input.UserGuess);
                    }
                    displayChosen.print();
                    console.log("guesses left: " + guessesLeft)
                    console.log("Letter Guessed: " + wrongguess.join("")
                    );
                    if(guessesLeft > 0) {
                        maingame();
                    } else{
                        console.log("Game Over! :( ")
                        reset();
                    }
                }
            }
            
        })
    }else{
        console.log("WINNER WINNER CHICKEN DINNER!")
        reset();
    }
    function completeCheck(key){
        completedWord.push(key.guessed);
        console.log("complete check ran");
        console.log(key);
    }
    
    
}

function reset() {
    inquirer.prompt([{
        type: "list",
        message: "PLay again?",
        choices: ["PLAY", "EXIT"],
        name: "reset"
    }]).then(function(input) {
        if (input.restart === "PLAY") {
            nextword = true;
            wrongguess = [];
            rightguess = [];
            guessesLeft = 10;
            maingame();
        } else {
            return;
        }
    });
}
maingame();