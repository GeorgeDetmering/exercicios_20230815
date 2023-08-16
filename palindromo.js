// Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente).

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

const inputString = "Anotaram a data da maratona";
if (isPalindrome(inputString)) {
  console.log("A string é um palíndromo.");
} else {
  console.log("A string não é um palíndromo.");
}