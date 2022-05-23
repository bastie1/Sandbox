// Estruturas de decisão (condicionais)

let nome = "Gabriel";

if (nome === "Gabriel") {
  console.log("Tudo certo por aqui")
}

/* O que ocorreu no exemplo acima:
 * 1. Declarei uma variável inicializada com meu nome 
 * 2. O conteúdo entre parênteses é a condição que deve ser verificada
 * para que o código dentro do bloco, entre {chaves}, seja executado.
 * 3. Desse modo, se a variável nome for estritamente igual em valor 
 * (string com 7 caracteres) e tipo (string) à string "Gabriel", então
 * o código no bloco abaixo será executado. Caso contrário, o bloco de código
 * será "pulado" e o programa continuará interpretando as linhas seguintes*/

nome = "João";

if (nome === "João") {
  console.log(`Tudo certo por aqui`)
} else if (nome === "Carlos") {
  console.log(`Olá, Carlos! :)`)
} else {
  console.log(`Seu nome não é João Carlos :(`)
}

// Exemplo de estrutura condicional com switch e case

function identificaNumeroDDD(int) {
  switch (int) { 
    // int é a expressão a ser avaliada
    case 11:
      // bloco de código (o que está entre case e break) a ser executado caso o resultado da expressão seja igual a 11
      console.log("Sao Paulo")
      break;
    case 19:
        console.log("Campinas");
        break;
    case 21:
        console.log("Rio de Janeiro");
        break;
    case 27:
        console.log("Vitoria");
        break;
    case 31:
        console.log("Belo Horizonte");
        break;
    case 32:
        console.log("Juiz de Fora");
        break;
    case 61:
        console.log("Brasilia");
        break;
    case 71:
        console.log("Salvador");
        break;
    default:
      // bloco de código que será executado quando o valor da expressão for diferente de todos os cases
        console.log("DDD nao cadastrado");
        break;
  }
}

identificaNumeroDDD(11) // Sao Paulo