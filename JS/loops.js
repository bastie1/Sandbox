// Loops são estruturas de repetição ou laços de repetição

// For loops

// Tabuadas com for loop

let int = 5;

for (let i = 0; i <= 10; i ++) {
  // O laço for, nesse caso, percorre a sequência de números, partindo do 0 até o 10.
  // A variável i é o contador, iniciado em 0. A condição para que a estutura entre parênteses continue sendo executada (repetindo) é ser menor ou igual a 10.
  // O último parâmetro define que o contador será acrescido de 1 em cada repetição. Ou seja, por debaixo dos panos, o que está ocorrendo é o seguinte:
  // i = 0.
  // i += 1. i = 1. 
  // i += 1. i = 2.
  // i += 1. i = 3.
  // i += 1. i = 4.
  // i += 1. i = 5.
  // i += 1. i = 6.
  // i += 1. i = 7.
  // i += 1. i = 8.
  // i += 1. i = 9.
  // i += 1. i = 10. (condição resolvida. i <= 10. caso i = 11, o código sequer será executado.)
  console.log("O valor de " + int + " x " + i + " = " + int * i);
    // O resultado é uma tabuada do número que for atribuído à variável int
}

// While loops
// Essa forma de iteração executa determinado bloco de código enquanto a condição recebida for verdadeira.
// A diferença entre um while loop e um for loop é que esse último exige uma condição de parada. Ou seja, é necessário
// saber até quando o bloco de código executado será repetido.

let n = 0;
let x = 1;

while (n < 10) {
  // Enquanto n<10, execute o que estiver dentro do bloco de código
  n++; 
    // incrementador (condição de parada, pois em algum momento n=10 e o loop será interrompido)
  x += n;
    // n = 1; x = 2;
    // n = 2; x = 4;
    // n = 3; x = 7;
    // n = 4; x = 11;
    // n = 5; x = 16;
    // n = 6; x = 22;
    // n = 7; x = 29;
    // n = 8; x = 37;
    // n = 9; x = 46;
    // n = 10; x = 56.
}

console.log(n, x) // 10 56
  // Por que n = 10?
  // Pois quando n = 9, ele ainda é menor que 10. Portanto, o código é rodado novamente para n = 10, 
  // momento em que ocorre a interrupção do loop. (10 < 10 = false)