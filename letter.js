function Letter(char){
    this.letter= char
    this.guessed= false;
    this.display=function(){
        if(this.letter === " ") {

        }else{

            if(this.guessed){
                return (char);
            }else{
                return ("_");
            }
        }
    };
    this.check=function(guess){
        if(char==guess){
            this.guessed=true
        }
    }
}
// console.log("letter is loaded too")
module.exports=Letter;
// let a = new Letter("a")
// console.log(a)
// a.display()
// a.check("b")
// a.display()
// console.log(a)
// a.check("a")
// a.display()
// console.log(a)