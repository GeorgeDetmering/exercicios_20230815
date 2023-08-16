// Calcule o produto dos números de 1 a 5 utilizando um loop do...while.

let number = 1;
let product = 1;

do {
    product *= number;
    number++;
} while (number <= 5);

console.log(`O produto dos números de 1 a 5 é: ${product}`);