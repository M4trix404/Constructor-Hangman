//Constructor function for game.js

//Instructions: The game.js file will randomly select a word for the player.

var Word = require("./word.js");


var Game = function(){
    this.hiddenWords = ["tiger","hippopotamus","python","gazelle","rhino","giraffe","lion", "ostrich", "cheetah"];

    this.randomWord = this.hiddenWords[ Math.floor(Math.random() * this.hiddenWords.length)];
    this.currentWord = new Word(this.randomWord);

}
var hangMan = new Game();
// console.log(hangMan.randomWord);

module.exports = Game;