var readline = require('readline');
var util = require('./../_util/util');

var randomGenerated   = util.rng(12,0);
var AllPossibilities  = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var restPossibilities = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var firstCard         = pull();
var secondCard        = pull();

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Pulled card is:"+ firstCard);

var doQuestion = function(){
    rl.question("Guess \"higher\" or \"lower\": ", function(answer){
        if (confirm(answer.toLowerCase())) {
            return rl.close();
        }
        doQuestion();
    });
};
doQuestion();

function pull() {
    var pick = util.rng(restPossibilities.length,0);
    var card = restPossibilities[pick];
    restPossibilities.splice(pick, 1);
    return card;
}

function confirm(answer) {
        var IOFirst = AllPossibilities.indexOf(firstCard);
        var IOSecond = AllPossibilities.indexOf(secondCard);
        console.log(answer);
        if (answer == "higher" || answer == "lower"){
            console.log("**********");
            if(answer == "higher" && IOFirst < IOSecond){
                //higher right
                console.log("You were RIGHT, The second card was \"higher\" than the first card!");
            } else if(answer == "lower" && IOFirst > IOSecond) {
                //lower right
                console.log("You were RIGHT, The second card was \"lower\" than the first card!");
            } else if(answer == "higher" && IOFirst > IOSecond){
                //higher incorrect
                console.log("You were INCORRECT, you guessed \"higher\" but the second card was \"lower\"");

            } else if(answer == "lower" && IOFirst < IOSecond) {
                //lower incorrect
                console.log("You were INCORRECT, you guessed \"lower\" but the second card was \"higher\"");

            }
            console.log( "\n"+
                "First card was: "+firstCard+"\n"+
                "Second card was:"+secondCard+"\n"+
                "**********"
            );
            return true;
        } else {
            // error only enter higher or lower
            console.log("Only enter \"higher\" or \"lower\"");
        }
        return false;
}
