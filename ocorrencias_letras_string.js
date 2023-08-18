// Conte quantas ocorrências de uma determinada letra existem em uma string.

function contarOcorrencias(texto, letra) {
    var count = 0;
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] === letra) {
        count++;
      }
    }
    return count;
  }
  
  var texto = 'A abelha voa pela árvore azul';
  var letraProcurada = 'a'; // Letra que você quer contar (maiúscula ou minúscula)
  var ocorrencias = contarOcorrencias(texto, letraProcurada);
  
  console.log("A letra '" + letraProcurada + "' ocorre " + ocorrencias + " vezes na string.");