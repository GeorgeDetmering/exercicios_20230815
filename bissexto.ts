// Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).

const ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto.`);
    } else {
    console.log(`${ano} não é um número bissexto.`);
}