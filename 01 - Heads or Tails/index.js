var readline = require('readline');
var util = require('./../_util/util');

var possibilities = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var randomGenerated = util.rng(12,0);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Pulled card is:"+ pull());

var doQuestion = function(){
    rl.question("Guess higher or lower: ", function(answer){
        if (confirm(answer)) {
            return rl.close();
        }
        doQuestion();
    });
}
doQuestion();

function pull() {
    var pick = util.rng(12,0);
    var card = possibilities[pick];
    possibilities.splice(pick, 1);
    return card;
};

function confirm(answer) {
        if (answer.toLowerCase() == "lower"){
            // lower code
            console.log("lower!");
            return true;
        } else if (answer.toLowerCase() == "higher") {
            // higher code
            console.log("higher!");
            return true;
        } else {
            // error: does not exists
            console.log("Only enter \"higher\" or \"lower\"");
        }

    return false;
};


/*
function exists(val){
    for(var i = 0; i < possibilities.length; i++) {
        if(val.toLowerCase() == possibilities[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}
*/
