function encontrarMaiorValor(numero1, numero2, numero3) {
    return Math.max(numero1, numero2, numero3);
}

const numero1 = 30;
const numero2 = 25;
const numero3 = 15;
const maiorValor = encontrarMaiorValor(numero1, numero2, numero3);
console.log(`O maior valor é ${maiorValor}`);