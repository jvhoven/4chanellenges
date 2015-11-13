var fahrenheit = module.exports = {
    toCelcius: function(degrees) {
        return (degrees - 32) / 1.8;
    },
    toKelvin: function(degrees) {
        return (degrees - 32) * 5 / 9 + 273.15;
    }
}
