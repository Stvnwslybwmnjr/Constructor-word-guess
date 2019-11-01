let Letter= require("./letter")
// console.log(Letter)

function Word(string){
    this.word=[]
    string.split("").forEach(char=> this.word.push(new Letter(char)))
    this.print=function(){
        let display="";
        this.word.forEach(letter=>{
            display+=letter.display()
        })
        // console.log("=========word line 12=======")
        console.log(display)
    }
    this.guess=function(guessedLetter){
        this.word.forEach(letter=>{letter.check(guessedLetter)})
    }

}
module.exports=Word;

// let test= new Word("test")
// console.log(test)
// test.print()
// console.log("guessed A======")
// test.guess("a")
// console.log("guessed A======")
// console.log(test)
// test.print()
// console.log("guessed T======")
// test.guess("t")
// console.log("guessed T=======")
// console.log(test)
// test.print()
//console.log(console.log("x"))//illustrates that console.log uses side effects, i.e., is not a functional function