// Remova os espaços em branco em uma string.

var texto = '   Exemplo   de   texto   com   espaços removidos   ';
var textoSemEspacos = texto.replace(/\s+/g, '');

console.log(textoSemEspacos);