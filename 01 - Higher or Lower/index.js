var readline = require('readline');
var util = require('./../_util/util');

var randomGenerated = util.rng(12,0);
var possibilities = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

var firstCard = pull();
var secondCard = pull();

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Pulled card is:"+ firstCard);

var doQuestion = function(){
    rl.question("Guess higher or lower: ", function(answer){
        if (confirm(answer.toLowerCase())) {
            return rl.close();
        }
        doQuestion();
    });
};
doQuestion();

function pull() {
    var pick = util.rng(12,0);
    var card = possibilities[pick];
    possibilities.splice(pick, 1);
    return card;
}

function confirm(answer) {
        var IOFirst = possibilities.indexOf(firstCard.valueOf());  //TODO !!!!!!!!!
        var IOSecond = possibilities.indexOf(secondCard.valueOf()); // TODO!!!!!!!!!!!!
        console.log(answer);
        if (answer == "higher" || answer == "lower"){
            console.log("IOFirst= "+firstCard+" "+IOFirst);
            console.log("IOSecond= "+secondCard+" "+IOSecond);
            return true;
        } else {
            // error only enter higher or lower
        }
        return false;











        /*
        if (answer.toLowerCase() == "lower" && IOFirst > IOSecond){
            // lower was entered
            console.log(
                "**********" +"\n"+
                "You were right, The second card was LOWER than the first card!" +"\n"+
                "The pulled cards are: "+firstCard+" "+secondCard+"\n"+
                "**********");
            return true;
        } else if (answer.toLowerCase() == "higher" && IOFirst < IOSecond) {
            // higher was entered
            console.log(
                "**********" +"\n"+
                "You were right, The second card was HIGHER than the first card!" +"\n"+
                "The pulled cards are: "+firstCard+" "+secondCard+"\n"+
                "**********");
            return true;
        } else {
            // error!
            console.log("Only enter \"higher\" or \"lower\"");
        }

    return false;*/
}
