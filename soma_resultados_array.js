// Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados.


// Criando dois arrays de mesma dimensão
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

// Inicializando o array resultado
let resultado = [];

// Somando os elementos dos arrays e populando o array resultado
for (let i = 0; i < array1.length; i++) {
  resultado.push(array1[i] + array2[i]);
}

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array resultado:", resultado);
