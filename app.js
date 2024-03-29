//imposto i campi
var campoChilometri = document.getElementById("chilometri");
var campoEta = document.getElementById("eta");
var campoPrezzoProvvisorio = document.getElementById("prezzo-provvisorio");
var campoPrezzoFinale = document.getElementById("prezzo-finale");
var campoSconto = document.getElementById("sconto");

//imposto le variabili dell'utente
var chilometri, eta;

//imposto le variabili di prezzo
var prezzoAlKm = 0.21;
var prezzoProvvisorio, sconto, prezzoScontato

//chiedo in # di chilometri
chilometri = parseInt(prompt("Inserisci i chilometri da percorrere, senza decimali"));
campoChilometri.innerHTML = chilometri;

//chiedo l'età
eta = parseInt(prompt("Inserisci la tua età anagrafica"));
campoEta.innerHTML = eta;

//calcolo e mostro il prezzo provvisorio
prezzoProvvisorio = chilometri * prezzoAlKm;
campoPrezzoProvvisorio.innerHTML = prezzoProvvisorio + "€";


//determino se l'utente ha diritto ad uno sconto, e, se si, di quanto
if (eta < 18) {

    //calcolo lo sconto del 20%
    sconto = ((prezzoProvvisorio * 20) / 100);
    console.log(sconto);

    //notifico l'utente dello sconto
    campoSconto.innerHTML = "Hai diritto ad uno sconto del 20%!";

    //calcolo prezzo
    prezzoScontato = (prezzoProvvisorio - sconto).toFixed(2);
    console.log(prezzoScontato);
    
    //inserisco il prezzo calcolato
    campoPrezzoFinale.innerHTML = prezzoScontato + "€"

} else if (eta > 65) {

    //calcolo lo sconto del 40%
    sconto = ((prezzoProvvisorio * 40) / 100);
    console.log(sconto);

    //notifico l'utente dello sconto
    campoSconto.innerHTML = "Hai diritto ad uno sconto del 40%!";

    //calcolo prezzo
    prezzoScontato = (prezzoProvvisorio - sconto).toFixed(2);
    console.log(prezzoScontato);

    //inserisco il prezzo calcolato
    campoPrezzoFinale.innerHTML = prezzoScontato + "€"

} else {

    //nessuno sconto, inserisco direttamente il prezzo calcolato
    campoPrezzoFinale.innerHTML = prezzoProvvisorio + "€";
}