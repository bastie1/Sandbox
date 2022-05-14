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