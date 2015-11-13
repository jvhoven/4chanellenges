var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter age: ", function(answer) {
    var seconds = 0;
    for(var i = 1; i < answer; i++) {
        if(i % 4 == 0) {
            seconds += calculateYear(true);
        } else {
            seconds += calculateYear(false);
        }
    }

    console.log("You have lived for", seconds, "seconds");
    console.log("There were", Math.floor(answer / 4), "leap years occured")
    rl.close();
});

function calculateYear(leapyear) {
    var secondsPerYear = 60 * 60 * 60 * 24 * 7 * 52;
    if(leapyear) {
        secondsPerYear = secondsPerYear - (60 * 60 * 60 * 24);
    }

    return secondsPerYear;
}
