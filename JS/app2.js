/* function greetingsUser(){
    let name = prompt("Escreva seu nome");
    let greetings = "Bem-vindo, " + name; // `Bem-vindo, ${name}`
    return greetings;
}

greetingsUser()


/* Função que separa o valor da parte inteira e o valor da parte decimal de um 
 * número e retorna um objeto contendo cada valor em separado. Utilizei-a numa 
 * tentativa de aprimorar o ageConversor(), de modo que essa função tornaria 
 * possível a utilização da parte decimal dos resultados para realizar novos 
 * cálculos */
function splitIntFloat(number){
    const int = Math.trunc(daysToYears)
    let daysToYearsFloat = number - int

    return { 
        integer: int,
        decimal: daysToYearsFloat 
    }
}


/* Função que retorna a média entre três números
 * Utilizada no contexto acadêmico para informar ao estudante sua aprovação (ou não) numa matéria */
function sum(x, y, z){ // Função utilizada para somar
    let soma = x + y + z;
    return soma
}

function mean(x, y, z){
    let mean = sum(x, y, z)/3;
    mean >= 7 && mean <= 10 
    ? console.log("Parabéns! você foi aprovado(a)! :)") 
    : mean >= 0 && mean < 7 
        ? console.log("Que pena, você foi reprovado(a) :(") 
        : mean;

    mean >= 0 && mean <= 10 
    ? console.log("Sua média vale: " + mean.toFixed(1)) 
    : console.log("Os números inseridos retornam média maior que 10");

    mean >= 9 && mean <= 10 
    ? console.log("Vocé é um estudante conceito A") 
    : mean >= 8 && mean <= 8.9 
        ? console.log("Você é um estudante conceito B") 
        : mean >= 6 && mean <= 7.9 
            ? console.log("Você é um estudante conceito C") 
            : mean >= 5 && mean <= 5.9 
                ? console.log("Você é um estudante conceito D") 
                : mean < 5 
                    ? console.log("Você é um estudante conceito R :(") 
                    : mean;
}

mean(1.2,6.8,9.9)