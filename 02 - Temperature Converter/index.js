var readline = require("readline");
var async = require("async");
var celcius = require("./celcius");
var fahrenheit = require("./fahrenheit");
var kelvin = require("./kelvin");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async.series({
    first: function(callback) {
        rl.question("Fill in your unit: ", function(answer) {
            callback(null, answer);
        });
    },
    second: function(callback) {
        rl.question("Which conversion would you like?\n\t1. Celcius to Fahrenheit\n\t2. Celcius to Kelvin\n\t3. Fahrenheit to Celcius\n\t4. Fahrenheit to Kelvin\n\t5. Kelvin to Celcius\n\t6. Kelvin to Fahrenheit\n Choose a number: ", function(answer) {
            callback(null, answer);
        });
    },
}, function(err, results) {
    if(err) console.log(err);
    switch(results.second) {
        case "1":
            console.log(celcius.toFahrenheit(results.first), "fahrenheit");
            break;
        case "2":
            console.log(celcius.toKelvin(results.first), "kelvin");
            break;
        case "3":
            console.log(fahrenheit.toCelcius(results.first), "celcius");
            break;
        case "4":
            console.log(fahrenheit.toKelvin(results.first), "kelvin");
            break;
        case "5":
            console.log(kelvin.toCelcius(results.first), "celcius");
            break;
        case "6":
            console.log(kelvin.toFahrenheit(results.first), "fahrenheit");
            break;
        default:
            console.log("Couldn't compute");
            break;
    }
    rl.close();
});
