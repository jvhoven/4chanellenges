var util = require("util");
var utils = require("./../_util/util");
var celcius = require("./celcius");
var fahrenheit = require("./fahrenheit");
var kelvin = require("./kelvin");

process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log("Fill in a number:");
var input;

process.stdin.on('data', function(text) {
    input = util.inspect(text);
    console.log(utils.strip(input));
});
