/* Tom was here 10-12-'15*/

var util = require('./../_util/util');
var password= "";
var passLength = util.rng(12,8);
var possibilities = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
                     "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "{", "}", ";", ":", "-", "_", "=", "+", "|"];
var randomizer;

for (var i = 0; i < passLength; i++) {
    randomizer = util.rng(possibilities.length,0);
    password += possibilities[randomizer];
}

console.log("\n"+"Your password is:    "+password +"\n");
