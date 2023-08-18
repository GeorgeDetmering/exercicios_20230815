// Crie uma função que receba um array de números e retorne a média deles

function calcularMedia(arrayDeNumeros) {
    var total = 0;
    for (var i = 0; i < arrayDeNumeros.length; i++) {
      total += arrayDeNumeros[i];
    }
    var media = total / arrayDeNumeros.length;
    return media;
  }
  
  var numeros = [10, 20, 30, 40, 70];
  var mediaCalculada = calcularMedia(numeros);
  
  console.log("A média dos números é: " + mediaCalculada);