// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias
// Valores: ano = 365 dias, mês = 30 dias
function ageConversor(ageInDays) {
    let daysToYears = ageInDays / 365;
    let yearsToMonths;
    let monthsToDays;

    console.log(`Ano(s): ${Math.trunc(daysToYears)}`);
    
    yearsToMonths = (daysToYears - Math.trunc(daysToYears)) * 12;

    ageInDays == 30 
    ? console.log("Mes(es): " + 1) 
    : console.log(`Mes(es): ${Math.trunc(yearsToMonths)}`);

    monthsToDays = (yearsToMonths - Math.trunc(yearsToMonths)) * 30;
    
    ageInDays == 30 
    ? console.log("Dia(s): " + 0) 
    : console.log(`Dia(s): ${Math.ceil(monthsToDays)}`);
}

ageConversor(30); // Ano(s): 0; Mes(es): 1; Dia(s): 0


/* FIXME: Pensar numa forma de considerar o decorrer do tempo nesta função (das 7h às 7h, passaram-se 24h, mas a função, no momento,
 * não suporta essa ideia, devido à lógica nela aplicada) */
function gameTime(hoursMinutesValues){
    let gameDurationHour = hoursMinutesValues[2] - hoursMinutesValues[0];
    let gameDurationMinute = hoursMinutesValues[3] - hoursMinutesValues[1];
    let gameDuration = "O jogo durou " + gameDurationHour + " hora(s) e " + gameDurationMinute + " minuto(s)";
    return console.log(gameDuration);
}

let x = [7,7,7,7]; // Output deve ser 24h, preciso aprefeiçoar o código para que isso aconteça
gameTime(x);

// Tabuada do 5
function tabuadaDo5(){
    let int = 5;
    for (let i = 0; i <= 10; i++) {
        let result = int * i;
        console.log(result);
    }
}

tabuadaDo5();


// FIXME: Quadrado de pares
function pairSquare(x){
    let num = x
    if (num <= 5 || num > 2000){
        console.log("Esta não é uma entrada válida.");
    } else {
        for (let i = 2; i <= num; i += 2) {
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


/* Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando os seguintes DDDs:
 * 61 = Brasilia; 71 = Salvador; 11 - Sao Paulo; 21 = Rio de Janeiro; 32 = Juiz de Fora; 19 = Campinas; 27 = Vitoria; 31 = Belo Horizonte 
 * Obs.: Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar: “DDD nao cadastrado”*/

// Utilizando o operador ternário
function identificaNumeroDDD(int) {

    int === 11
        ? console.log("Sao Paulo")
        : int === 19
        ? console.log("Campinas")
        : int === 21
        ? console.log("Rio de Janeiro")
        : int === 27
        ? console.log("Vitoria")
        : int === 31
        ? console.log("Belo Horizonte")
        : int === 32
        ? console.log("Juiz de Fora")
        : int === 61
        ? console.log("Brasilia")
        : int === 71
        ? console.log("Salvador")
        : console.log("DDD nao cadastrado");
}

identificaNumeroDDD(11)

// Utilizando SWITCH/CASE
function identificaNumeroDDD(int) {
  switch (int) {
    case 11:
      console.log("Sao Paulo")
      break;
    case 19:
      console.log("Campinas")
      break;
    case 21:
      console.log("Rio de Janeiro")
      break;
    case 27:
      console.log("Vitoria")
      break;
    case 31:
      console.log("Belo Horizonte")
      break;
    case 32:
      console.log("Juiz de Fora")
      break;
    case 61:
      console.log("Brasilia")
      break;
    case 71:
      console.log("Salvador")
      break;
    default:
      console.log("DDD nao cadastrado")
      break;
  }
}

identificaNumeroDDD(11) // Sao Paulo



let j1 = 0, j2 = 0;

switch (j1 > 0) {
  case true:
    console.log("Jogador 1 marcou ponto");
    break;
  case (j2 > 0):
    console.log("Jogador 2 marcou ponto");
    break;
  default:
    console.log("Ninguém marcou ponto");
    break;         
}


/* Faça um Programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando listas (arrays). */

/* Faça um programa que sorteie 10 números aleatórios entre 0 e 100 e imprima:
A) o maior número sorteado;
B) o menor número sorteado;
C) a média dos números sorteados;
D) a soma dos números sorteados. */

// Function scopes
var p = 5; 

function func() {
  var p = 9;

  function decl() { 
    console.log(p);
  };

  var expr = function() { 
    console.log(p);
  };

  var cons = new Function('\tconsole.log(p);');

  decl();
  expr();
  cons();
}

func();