var celcius = module.exports = {
    toFahrenheit: function(degrees) {
        return (degrees * 1.8) + 32;
    },
    toKelvin: function(degrees) {
        return (degrees + 273.15);
    }
}
