// Conte quantas vogais tem em uma string.

function contarVogais(str) {
    var vogais = 'aeiouAEIOU';
    var count = 0;
  
    for (var i = 0; i < str.length; i++) {
      if (vogais.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  var texto = 'Exemplo de frase com vogais'; // Substitua pelo texto que desejar
  var numeroDeVogais = contarVogais(texto);
  
  console.log('Número de vogais no texto: ' + numeroDeVogais);