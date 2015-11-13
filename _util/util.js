var util = module.exports = {
    rng: function(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    ucfirst: function(name) {
        var firstLetter = name.charAt(0);
        var rest = name.substring(1, name.length).toLowerCase();
        return firstLetter + rest;
    },

    /*
    * Removes line breaks and other crazy stuff from the variable
    *
    * @var val The unformatted string
    */
    strip: function(val) {
        return String(val).replace(/(\r\n|\n|\r)/gm,"");
    }
}
