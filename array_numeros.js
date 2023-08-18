// Crie um array de números e ordene-o em ordem crescente.

// Criando um array de números aleatórios
let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100)); // Números aleatórios entre 0 e 99
}

console.log("Array original:", numeros);

// Ordenando o array em ordem crescente
numeros.sort(function(a, b) {
  return a - b;
});

console.log("Array ordenado:", numeros);
