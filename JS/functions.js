// Funções
// A principal função das funções é reutilizá-las (reutilizar pedaços de códigos caralho!!)

let numeroA = 2
let numeroB = 1

let soma = numeroA + numeroB
console.log(soma)

function somar(numeroA, numeroB) { //Corpo da função: entre parênteses estão os parâmetros de entrada (elementos que serão somados)
    let soma = numeroA + numeroB // Nos curly brackets, está a lógica da soma (somar dessa forma é recurso da linguagem)
    return soma
}

console.log(somar(1,5)) // 6

let _numeroA = 4
let _numeroB = 6

function mediana(_numeroA, _numeroB) {
    let media = somar(_numeroA, _numeroB)/2
    return media
}

console.log(mediana(4,6)) // 5

function ola(nome) {
  console.log(`Olá, ${nome}!`); 
    // Utilizando template literals (${variável}) é possível integrar variáveis em strings
}

ola("Gabriel") 
  // Não é necessário utilizar console.log para invocar a função neste caso, 
  // pois ela não possui return. Ou seja, não há uma variável sendo retornada
  // como "resultado da função", do modo que ocorre nas funções acima.