function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

const numeroParaCalcular = 5;
const resultado = calcularFatorial(numeroParaCalcular);
console.log(`O fatorial de ${numeroParaCalcular} é ${resultado}`);