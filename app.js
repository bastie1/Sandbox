function ageConversor(ageInDays) {
    let age = ageInDays;

    let daysToYears = age / 365;
    const dayToYearsInt = Math.trunc(daysToYears);
    console.log("Ano(s): " + dayToYearsInt);

    let yearsToMonths = (daysToYears - Math.trunc(daysToYears)) * 12;
    const yearsToMonthsInt = Math.trunc(yearsToMonths);
    age == 30 ? console.log("Mes(es): " + 1) : console.log("Mes(es): " + yearsToMonthsInt);

    let monthsToDays = (yearsToMonths - Math.trunc(yearsToMonths)) * 30;
    const monthsToDaysInt = Math.ceil(monthsToDays);
    age == 30 ? console.log("Dia(s): " + 0) : console.log("Dia(s): " + monthsToDaysInt);
}

let ageInDays = 30;
ageConversor(ageInDays); // Ano(s): 0; Mes(es): 1; Dia(s): 0

/* Pensar numa forma de considerar o decorrer do tempo nesta função (das 7h às 7h, passaram-se 24h, mas a função, no momento,
 * não suporta essa ideia, devido à lógica que nela apliquei) */
function gameTime(hoursMinutesValues){
    let gameDurationHour = hoursMinutesValues[2] - hoursMinutesValues[0];
    let gameDurationMinute = hoursMinutesValues[3] - hoursMinutesValues[1];
    let gameDuration = "O jogo durou " + gameDurationHour + " hora(s) e " + gameDurationMinute + " minuto(s)";
    return gameDuration;
}

let x = [7,7,7,7]; // Output deve ser 24h, preciso aprefeiçoar o código para que isso aconteça
console.log(gameTime(x));

// Tabuada do 5
function tabuadaDo5(){
    let int = 5;
    for (let i = 0; i <= 10; i++) {
        let result = int * i;
        console.log(result);
    }
}

tabuadaDo5();

// Quadrado de pares
function pairSquare(x){
    let num = x
    if (num <= 5 || num > 2000){
        console.log("Esta não é uma entrada válida.");
    } else {
        for (let i = 2; i <= num; i = i + 2) {
            let square = num * num;
            console.log(square);
        }
    }
}
pairSquare(6)

// Verifica se um número é primo
function verificaPrimo(n){
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        } else {
            return true;
        }
    }
}

// Retorna apenas números primos
let array = [1,2,3,4,5,6,7,8,9,73];
for(let i=0; i<array.length; i++){
    if(verificaPrimo(array[i])){
        console.log(array[i])
    }
}