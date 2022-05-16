// Variáveis

/* Pensar em variáveis como itens guardados na memória. Imagine um ambiente com diversas gavetas:
o nome de cada variável é o label que ela recebe (let label = value), para que seja facilmente localizada 
posteriormente */

/* Javascript é dinamicamente tipada devido ao fato de a linguagem interpretar os inputs fornecidos,
não sendo preciso declarar numa variável a sua espécie: se string, se booleano, se inteiro, se float;
a própria linguagem interpreta a informação recebida e entrega o quanto solicitado, como no exemplo abaixo. 
Isso é bom e ruim ao mesmo tempo, devo explorar os motivos */

// É possível declarar múltiplas variáveis utilizando apenas um let/const statement. Cada declaração é separada por vírgula.
let multipleVars = 1, var1 = 2, var2 = 3;

let numero = 1.85
console.log(numero) // 1.85

// É possível declarar variáveis vazias e atribuir valores a elas posteriormente, da seguinte forma
let emptyVar
emptyVar = 'notEmpty'
console.log(emptyVar) // notEmpty

// Var e let são diferentes, mas por quê?
// Pois é possível redeclarar variáveis utilizando var, mas não é possível utilizando let ou const
var a = 9
var a = 3

console.log(a) // 3

let cat = {
    Name: "Oliver",
    Sound: "Meow",
}
console.log(cat)

// Desafio 1 - Condição: Não redeclarar variáveis

let A = 1
let B = 3

console.log(A,B) // 3 1


/* RESPOSTA
Esse desafio mostra que DECLARAR variáveis é diferente de ATRIBUIR VALORES(datatypes) a elas */

/* let A = 1
let B = 3 
let C // Aqui eu somente declarei outras variáveis, sem valores atribuídos (C,D)
let D

C = A // A partir daqui, atribui novos valores às variáveis C e D
D = B
A = D // Com isso, é possível atribuir o valor de B -> A e vice-versa
B = C

console.log(A,B) // 3 1 


// Desafio 2 - Condições: Não redeclarar variáveis; utilizar somente uma variável auxiliar
// Inicializar uma variável é atribuir valor a ela em sua criação OU pela primeira vez

let A = 1 // Variável declarada e com valor atribuído == variável inicializada: no primeiro momento que declarei, já atribui um valor
let B = 3
let C

C = A // C = 1
A = B // A = 3 (o código é lido de cima para baixo, então, neste momento, A = 3 pois B = 3)
B = C // B = 1

// Inicializar as variáveis e ao fim do programa seus valores devem ser printados na tela de forma invertida (o valor de uma variável em outra)
console.log(A,B) // 3 1


// Desafio 3 - Declarar e inicializar a variável e atribuir a ela seu próprio valor somado de 1

let A = 1

A = A + 1
A += 1 // Melhor assim

console.log(A) // 2


// Desafio 4 - Declarar e inicializar a variável e atribuir o seu valor multiplicado por 2

let A = 2
A = A * 2

console.log(A) // 4


// Desafio 5 - Calcular a média entre duas variáveis e printar na tela

let A = 10
let B = 5

let C = (A + B)/2
console.log(C) // 7.5 */


/* Desafio 6 - Declarar uma variável que guarde o nome de uma pessoa e que printe na tela
"Olá, {nome da pessoa}, bem-vindo" */

let nome = "T" // Variável que contém o nome do usuário
let greetings = "Olá, " + nome + ", bem-vindo" // Variável que contém modelo de saudação ao usuário

console.log(greetings) // Olá, T, bem-vindo

/* Neste caso, foi mais proveitoso armazenar o modelo de saudação numa variável, para poder reutilizá-lo cada vez que um usuário
fosse saudado, do que seguir com a minha solução equivocada: console.log("Olá, " + nome + ", bem-vindo"). 
Isso é importante, pois com essa boa prática é possível condensar as informações numa variável e utilizá-la em diversos pontos
do código */

// Preciso definir o que é uma string -> conjunto de caracteres (array de caracteres)

/* Saber o tamanho de uma string é interessante e útil em diversos casos, um bom exemplo: 
Um campo contendo input de texto, que deverá ser inserido pelo usuário, mas com limitação de caracteres (min ou max).
Neste exemplo, saber o comprimento do texto (string) inserido pelo usuário será indispensável para formular a lógica
que determinará a quantidade mínima ou máxima de caracteres possíveis de serem inseridos.
Uma boa solução engloba conceitos já estudados acima (variáveis, declaração de uma variável, atribuição de valor a uma variável,
inicialização de uma variável), e está representada abaixo: */


let username = 'Gabriel'
let stringSize = username.length

console.log(stringSize) // 7


// Arrays

// Array são conjuntos de variáveis contíguas na memória -> 
let array = [1, null, false, "lala", 
    { 
        Nome: "array", 
        Tipo: { 
            label1: true, 
            label2: false,
        }
    }
]

console.log(array)
// A array acima contém um number, null, boolean, string e object which contais another object: elas podem armazenar 
// diversos tipos de dados, sendo possível manipulá-los dentro de uma array

// Uma array "guarda em si" informações contíguas na memória do computador, facilitando o acesso pela máquina, por estarem 
// "lado a lado", próximas umas das outras, como se (novamente) estivessem em gavetas diferentes muito próximas uma das
// outras, sequencialmente.

// Numa array multidimensional podem estar contidas outras arrays
let array2d = [[1,2], [3,5], [4,6], [7,9]]
console.log(array2d[1][0]) // 3 //É possível acessar elementos de uma array dentro de outra array conforme essa sintaxe (a array na posição 1 contém "3" como elemento na posição 0)

array2d.push([11, 14]) // A função push() inclui elementos à partir da última posição da array
console.log(array2d) // [...[11,14]]

array2d.pop() // A função pop() remove o último elemento da array e o retorna
console.log(array2d) // [...[7,9]] Mostra apenas a array sem retornar o elemento removido

let returnRemovedElement = array2d.pop() // Essa é uma forma de retornar o elemento removido: armazenando-o numa variável
console.log(array2d) // [4,6] 

array2d.shift() // Remove o primeiro elemento da array e o retorna
console.log(array2d) // [[3,5]...] Mostra apenas a array sem retornar o elemento removido

let returnShiftedElement = array2d.shift() // Retorna o primeiro elemento da array
console.log(returnShiftedElement) // [1,2]

array2d.unshift([1,2]) // Inclui elementos à partir da primeira posição da array
console.log(array2d) // [[1,2]...]


// Funções
// A principal função das funções é reutilizá-las (reutilizar pedaços de códigos caralho)

let numeroA = 2
let numeroB = 1

let soma = numeroA + numeroB
console.log(soma)

function somar(numeroA, numeroB){ //Corpo da função: entre parênteses estão os parâmetros de entrada (elementos que serão somados)
    let soma = numeroA + numeroB // Nos curly brackets, está a lógica da soma (somar dessa forma é recurso da linguagem)
    return soma
}

console.log(somar(1,5)) // 6


let _numeroA = 4
let _numeroB = 6

function mediana(_numeroA, _numeroB){
    let media = somar(_numeroA, _numeroB)/2
    return media
}

console.log(mediana(4,6)) // 5


let multipleValuesVar = 'example1', multipleValuesVar2 = 'example2', multipleValuesVar3 = 'example3'; 

console.log(multipleValuesVar2)