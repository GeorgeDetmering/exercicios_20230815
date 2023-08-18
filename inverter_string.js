// Função que inverte uma string (exemplo: "hello" => "olleh")

function inverterString(str) {
    var stringInvertida = "";
    for (var i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    return stringInvertida;
  }
  
  var texto = "hello";
  var textoInvertido = inverterString(texto);
  
  console.log("Texto invertido: " + textoInvertido);