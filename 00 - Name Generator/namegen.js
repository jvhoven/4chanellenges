var util = require('./util');

var namegen = module.exports = {

    // A name needs atleast one vowel
    vowels: [ "A", "E", "I", "O", "U", "Y" ],
    alphabet: [ "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W" ],
    filter: [ "K", "L", "M", "P", "R", "B", "D", "F", "G" ],

    generate: function() {
        var length = util.rng(11, 3);
        var name = "";

        for(var i = 1; i < length; i++) {
            var letter = "";

            if(i % 2 == 0) {
                letter = this.vowels[util.rng(this.vowels.length, 1)];
                if((letter == "A" || letter == "E" || letter == "O" || letter == "U") && util.rng(10, 1) == 1) {
                    name = name + letter;
                } else if(util.rng(7, 1) == 1) {
                    var vowel = this.vowels[util.rng(this.vowels.length, 1)];
                    name = name + vowel;
                }
            } else {
                var letter = this.alphabet[util.rng(this.alphabet.length, 1)];
                if((this.canBeDouble(letter) && util.rng(5, 1) == 1) && (i > Math.floor(length / 3) || i > length - 2)) {
                    name = name + letter;
                }
            }
            name = name + letter;
        }

        return name;
    },

    canBeDouble: function(letter) {
        for(var key in this.filter) {
            if(this.filter[key] == letter) {
                return true;
            }
        }

        return false;
    }
}
