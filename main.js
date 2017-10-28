//This game will run in Bash/Terminal and contains the logic of the app.

var prompt = require("prompt");
prompt.start();

var Word = require("./word.js");



console.log("Welcome to Animal Safari Hangman!");
console.log("Guess a letter of the name of a safari animal");
console.log("Goodluck!");
console.log("-----------------------------");
prompt.start();



game = {
    wordBank: ["tiger","hippopotamus","python","gazelle","rhino","giraffe","lion", "ostrich", "cheetah"],
    wordsWon: 0,
    guessesRemaining: 10,
    currentWord: null,

    startGame: function (Word) {
        this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
        this.currentWord.getLet();
        this.promptUser();
    },

    resetGuesses: function(){
        this.guessesRemaining = 10;
    },

    promptUser: function(){
        var self = this;
        prompt.get(['guessLetter'], function(err, result){
            console.log("You guessed: " + result.guessLetter);
            var manyGuessed = self.currentWord.checkLetter(result.guessLetter);

            if(manyGuessed ==0) {
                console.log("wrong");
                self.guessesRemaining--;

            } else {
                console.log("ok");
                if(self.currentWord.findWord()){
                    console.log("You won!");
                    console.log("-------------------");
                    return;
                }
            }

            console.log("Guesses remaining: " + self.guessesRemaining);
            console.log("-------------------");
            if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
                self.promptUser();
            }
            else if(self.guessesRemaining ==0){
                console.log("Game over. Correct Word ", self.currentWord.target);
            } else {
                console.log(self.currentWord.wordRender());
            }
        });

    }


};

game.startGame();