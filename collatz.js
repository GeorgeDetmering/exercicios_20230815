// Implemente a sequência de Collatz: comece com um número n e, se n for par, divida-o por 2; se for ímpar, multiplique-o por 3 e some 1. Repita o processo até n se tornar 1.

function collatzSequence(n) {
    console.log(n);
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = (n * 3) + 1;
      }
      console.log(n);
    }
  }
  
  var numeroInicial = 6; // Você pode substituir pelo número que desejar
  collatzSequence(numeroInicial);