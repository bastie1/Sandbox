// Arrays

// Array são conjuntos de variáveis contíguas na memória -> 
let array = [1, null, false, "lala", 
    { 
        Nome: "array", 
        Tipo: { 
            diversificadaEmTipos: true, 
            tipada: false,
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
console.log(array2d[1][0]) // 3 //É possível acessar elementos de uma array dentro de outra array com essa sintaxe: a array na posição 1 contém "3" como elemnento na posição 0

array2d.push([11, 14]) // A função push() inclui elementos à partir da última posição da array
console.log(array2d) // [...[11,14]]

array2d.pop() // A função pop() remove o último elemento da array e o retorna
console.log(array2d) // [...[7,9]] Mostra apenas a array sem retornar o elemento removido

/* let returnRemovedElement = array2d.pop() // Essa é uma forma de retornar o elemento removido: armazenando-o numa variável
console.log(array2d) // [4,6] */

array2d.shift() // Remove o primeiro elemento da array e o retorna
console.log(array2d) // [[3,5]...] Mostra apenas a array sem retornar o elemento removido

/* let returnShiftedElement = array2d.shift() // Retorna o primeiro elemento da array
console.log(returnShiftedElement) // [1,2] */

array2d.unshift([1,2]) // Inclui elementos à partir da primeira posição da array
console.log(array2d) // [[1,2]...]