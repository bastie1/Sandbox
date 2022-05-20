// Variáveis

/* Pensar em variáveis como itens guardados na memória. Imagine um ambiente com diversas gavetas:
o nome de cada variável é o label que ela recebe (let label = value), para que seja facilmente localizada 
posteriormente */

/* Javascript é dinamicamente tipada devido ao fato de a linguagem interpretar os inputs fornecidos,
não sendo preciso declarar numa variável a sua espécie: se string, se booleano, se inteiro, se float;
a própria linguagem interpreta a informação recebida e entrega o quanto solicitado, como no exemplo abaixo. 
Isso é bom e ruim ao mesmo tempo, devo explorar os motivos */

let numero = 1.85
console.log(numero) // 1.85

// É possível declarar variáveis vazias e atribuir valores a elas posteriormente, da seguinte forma

let emptyVar
emptyVar = 'notEmpty'
console.log(emptyVar) // notEmpty

// Var e let são diferentes, mas por quê?
// Pois é possível redeclarar variáveis utilizando var, mas não é possível utilizando let

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
/*
let A = 1 // Aqui eu declarei as variáveis e atribui a um valor (integer) a duas delas (A,B)
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
A = B // A = 3
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
A *= 2 // Aprimorado

console.log(A) // 4


// Desafio 5 - Calcular a média entre duas variáveis e printar na tela

let A = 10
let B = 5

let C = (A + B)/2
console.log(C) // 7.5


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

// Declarar variáveis utilizando const implica afirmar que o valor a elas atribuído não poderá ser modificado
// posteriormente, ou seja, são somente leitura (read only)
// Variáveis declaradas com const devem ser inicializadas no primeiro momento de sua existência no código

const EXAMPLE = "never change" // É comum que as variáveis const sejam nomeadas em UPPERCASE

// Incrementar ou decrementar um número com os operadores ++ e --

let i = 1;
i++; // é o mesmo que i = i + 1

console.log(i); // 2

i--; // é o mesmo que i = i -1

console.log(i); // 1



