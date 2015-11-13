var util = require('./../_util/util');
var namegen = require('./namegen');
var fs = require('fs');

function createNames(iterations) {
    var stream = fs.createWriteStream("names.txt");
    stream.once('open', function(fd) {
        for(var i = 0; i < iterations; i++) {
            stream.write(util.ucfirst(namegen.generate()) + "\n");
        }
        stream.end();
    });

    console.log("Generated " + iterations + " names");
}

createNames(1000);
