// Crie um loop que imprima a sequência de Fibonacci até o 10º termo.

let fibTerm1 = 0;
let fibTerm2 = 1;

console.log(fibTerm1);
console.log(fibTerm2);

for (let i = 3; i <= 10; i++) {
    const nextFibTerm = fibTerm1 + fibTerm2;
    console.log(nextFibTerm);

    fibTerm1 = fibTerm2;
    fibTerm2 = nextFibTerm;
}
    