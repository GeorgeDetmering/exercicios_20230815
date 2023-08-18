// Converta uma temperatura de Celsius para Fahrenheit usando funções.

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  var temperaturaCelsius = 25;
  var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
  
  console.log(temperaturaCelsius + "°C é igual a " + temperaturaFahrenheit + "°F");