// Crie um programa que imprima a tabela de multiplicação de 1 a 10.

for (var i = 1; i <= 10; i++) {
    console.log("Tabela de multiplicação do " + i + ":");
    for (var j = 1; j <= 10; j++) {
      var resultado = i * j;
      console.log(i + " x " + j + " = " + resultado);
    }
    console.log(""); // Linha vazia entre as tabelas
  }