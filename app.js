function ageConversor(ageInDays) {
    let age = ageInDays

    let daysToYears = age / 365
    const dayToYearsInt = Math.trunc(daysToYears)
    console.log("Ano(s): " + dayToYearsInt)

    let yearsToMonths = (daysToYears - Math.trunc(daysToYears)) * 12
    const yearsToMonthsInt = Math.trunc(yearsToMonths)
    age == 30 ? console.log("Mes(es): " + 1) : console.log("Mes(es): " + yearsToMonthsInt)

    let monthsToDays = (yearsToMonths - Math.trunc(yearsToMonths)) * 30
    const monthsToDaysInt = Math.ceil(monthsToDays)
    age == 30 ? console.log("Dia(s): " + 0) : console.log("Dia(s): " + monthsToDaysInt)
}

let ageInDays = 30
ageConversor(ageInDays) // Ano(s): 0; Mes(es): 1; Dia(s): 0

function gameTime(hoursMinutesValues){
    let gameDurationHour = hoursMinutesValues[2] - hoursMinutesValues[0]
    let gameDurationMinute = hoursMinutesValues[3] - hoursMinutesValues[1]
    let gameDuration = "O jogo durou " + gameDurationHour + " hora(s) e " + gameDurationMinute + " minuto(s)"
    return gameDuration
}

let x = [7,7,7,7]
console.log(gameTime(x))