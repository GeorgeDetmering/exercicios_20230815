// Crie um programa que encontre o valor mais frequente em um array de números.function encontrarValorMaisFrequente(array) {
  
function encontrarValorMaisFrequente(array) {
    let contador = {}; // Objeto para contar a frequência dos valores
    let valorMaisFrequente;
    let frequenciaMaxima = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (contador[array[i]] === undefined) {
        contador[array[i]] = 1;
      } else {
        contador[array[i]]++;
      }
  
      if (contador[array[i]] > frequenciaMaxima) {
        frequenciaMaxima = contador[array[i]];
        valorMaisFrequente = array[i];
      }
    }
  
    return valorMaisFrequente;
  }
  
  let numeros = [1, 3, 5, 3, 2, 1, 1, 5, 3, 3, 4, 4, 4];
  let valorFrequente = encontrarValorMaisFrequente(numeros);
  
  console.log("Array:", numeros);
  console.log("Valor mais frequente:", valorFrequente);
  