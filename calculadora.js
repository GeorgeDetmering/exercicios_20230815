// Crie uma calculadora simples que opere com dois números e um operador (+,-,*,/).

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Calculadora Simples");
console.log("Operações disponíveis: +, -, *, /");

rl.question("Digite a operação desejada (+, -, *, /): ", (operacao) => {
  if (['+', '-', '*', '/'].includes(operacao)) {
    rl.question("Digite o primeiro número: ", (num1Str) => {
      const num1 = parseFloat(num1Str);

      rl.question("Digite o segundo número: ", (num2Str) => {
        const num2 = parseFloat(num2Str);

        let resultado;
        switch (operacao) {
          case '+':
            resultado = num1 + num2;
            break;
          case '-':
            resultado = num1 - num2;
            break;
          case '*':
            resultado = num1 * num2;
            break;
          case '/':
            resultado = num1 / num2;
            break;
        }

        console.log("Resultado:", resultado);
        rl.close();
      });
    });
  } else {
    console.log("Operação inválida. Por favor, escolha +, -, *, ou /.");
    rl.close();
  }
});