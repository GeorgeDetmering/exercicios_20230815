// Crie um array de nomes e ordene-o em ordem alfabética.

// Criando um array de números
let numeros = [45, 23, 67, 12, 89, 34, 56, 78, 99, 8];

// Inicializando a variável para armazenar o maior valor
let maiorValor = numeros[0];

// Percorrendo o array para encontrar o maior valor
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorValor) {
    maiorValor = numeros[i];
  }
}

console.log("O maior valor é:", maiorValor);
