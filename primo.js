// Verifique se um número é primo ou não.

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    if (number <= 3) {
      return true;
    }
    
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    
    for (var i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  var numero = 17; // Substitua pelo número que desejar
  if (isPrime(numero)) {
    console.log(numero + " é um número primo.");
  } else {
    console.log(numero + " não é um número primo.");
  }