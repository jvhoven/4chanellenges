var kelvin = module.exports = {
    toCelcius: function(degrees) {
        return (degrees - 273.15);
    },
    toFahrenheit: function(degrees) {
        return (degrees - 273.15) * 1.8 + 32;
    }
}
