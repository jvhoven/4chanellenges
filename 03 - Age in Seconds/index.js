var readline = require("readline");
var leapyears = 0;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter age: ", function(answer) {
    var seconds = 0;
    var year = new Date().getFullYear() - answer;

    for(var i = 1; i < answer; i++) {
        if(isLeapyear(year)) {
            seconds += calculateYear(true);
            leapyears++;
        } else {
            seconds += calculateYear(false);
        }
        year++;
    }

    console.log("You have lived for", seconds, "seconds");
    console.log(Math.floor(leapyears), "leap years occured")
    rl.close();
});

function isLeapyear(year) {
    if(year % 4 != 0) {
        return false;
    } else if(year % 100 != 0) {
        return true;
    } else if(year % 400 != 0) {
        return false;
    } else {
        return true;
    }
}

function calculateYear(leapyear) {
    var secondsPerYear = 60 * 60 * 60 * 24 * 7 * 52;
    if(leapyear) {
        secondsPerYear = secondsPerYear - (60 * 60 * 60 * 24);
    }

    return secondsPerYear;
}
