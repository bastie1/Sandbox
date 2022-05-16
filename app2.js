/* function greetingsUser(){
    let name = prompt("Escreva seu nome");
    let greetings = "Bem-vindo, " + name;
    return greetings;
}

greetingsUser()

 // Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias
// Valores: ano = 365 dias, mês = 30 dias

function ageConversor (ageInDays){
    let age = ageInDays
 
    let daysToYears = age / 365 // O número de anos com algumas casas decimais (muito provavelmente)
    // Preciso que a parte inteira do resultado acima apareça no tela

    let daysToYearsFloat = age % 365 // Apenas a parte decimal do resultado acima (caso haja)
    // Preciso desse resultado para realizar os cálculos seguintes

    let yearsToMonths = daysToYears * 12 // O número de meses com algumas casas decimais (bem provável)
    // Preciso que a parte inteira do resultado acima apareça na tela

    let monthsToDays = // Preciso capturar a parte decimal do resultado acima e utilizá-lo para realizar novo cálculo
    // A parte inteira do resultado do novo cálculo deve ser mostrado na tela 
} */

/* Função que separa o valor da parte inteira e o valor da parte decimal de um número e retorna um objeto contendo cada valor em separado
 * Utilizei-a numa tentativa de aprimorar o programa acima, de modo que essa função tornaria possível a utilização da parte decimal dos resultados
 * para realizar novos cálculos */
function splitIntFloat(number){
    const int = Math.trunc(daysToYears)
    let daysToYearsFloat = number - int

    return { 
        integer: int,
        decimal: daysToYearsFloat 
    }
}

let ageInDays = 81273891
let daysToYears = ageInDays / 365

let yearsToMonths = ((splitIntFloat(daysToYears).decimal).toFixed(1) * 12).toFixed(1)
console.log(yearsToMonths)
let yearsToMonthsFloat = splitIntFloat(yearsToMonths)

/* Função que retorna a média entre três números
 * Utilizada no contexto acadêmico para informar ao estudante sua aprovação (ou não) numa matéria */
function sum(x, y, z){ // Função utilizada para somar
    let soma = x + y + z;
    return soma
}

function mean(x, y, z){
    let mean = sum(x, y, z)/3;
    mean >= 7 && mean <= 10 ? console.log("Parabéns! você foi aprovado(a)! :)") : 
        mean >= 0 && mean < 7 ? console.log("Que pena, você foi reprovado(a) :(") : mean;
    mean >= 0 && mean <= 10 ? console.log("Sua média vale: " + mean.toFixed(1)) : console.log("Os números inseridos retornam média maior que 10");
    mean >= 9 && mean <= 10 ? console.log("Vocé é um estudante conceito A") : 
        mean >= 8 && mean <= 8.9 ? console.log("Você é um estudante conceito B") : 
            mean >= 6 && mean <= 7.9 ? console.log("Você é um estudante conceito C") : 
                mean >= 5 && mean <= 5.9 ? console.log("Você é um estudante conceito D") :
                    mean < 5 ? console.log("Você é um estudante conceito R :(") : mean;
}

mean(1.2,6.8,9.9)