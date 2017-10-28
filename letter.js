
//letter.js controls whether or not a letter appears as  "_" or as itself onscreen.
//pass in latter into function

var letter = function(lett){
    this.charac = lett;
    this.appear = false;
    this.letterRender = function(){
        return !(this.appear) ? "_" : this.charac;
    };
};

//Export the constructor
module.exports = letter;