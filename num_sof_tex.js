// Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 3 imprima "Tex".

for (var i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("SofTex");
    } else if (i % 3 === 0) {
      console.log("Sof");
    } else if (i % 5 === 0) {
      console.log("Tex");
    } else {
      console.log(i);
    }
  }