var util = require('./../_util/util');
var readline = require('readline');

var possibilities = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var randomGenerated = util.rng(12,0);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Pulled card is:"+ pull());
rl.question("Guess higher or lower: ", function(answer){
    //confirm TODO
    rl.close();
});


function pull() {
    var pick = util.rng(12,0);
    var card = possibilities[pick];
    possibilities.splice(pick, 1);
    return card;
}

function confirm(answer) {
        if (answer.toLowerCase() == "lower"){
            // lower code

        } else if (answer.toLowerCase() == "higher") {
            // higher code
        } else {
            // error: does not exists
            console.log("Only enter \"higer\" or \"lower\"");
            return false;
        }
}

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
