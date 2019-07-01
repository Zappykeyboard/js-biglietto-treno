//imposto i campi
var campoChilometri = document.getElementById("chilometri");
var campoEta = document.getElementById("eta");
var campoPrezzoProvvisorio = document.getElementById("prezzo-provvisorio");
var campoPrezzoFinale = document.getElementById("prezzo-finale")

//imposto le variabili dell'utente
var chilometri, eta;

//imposto le variabili di prezzo
var prezzoAlKm = 0.21;
var prezzoProvvisorio, sconto, prezzoScontato

//imposto i prompt
chilometri = parseInt(prompt("Inserisci i chilometri da percorrere, senza decimali"));
campoChilometri.innerHTML = chilometri;

prezzoProvvisorio = chilometri * prezzoAlKm;
campoPrezzoProvvisorio.innerHTML = prezzoProvvisorio + "€";


eta = parseInt(prompt("Inserisci la tua età anagrafica"));
campoEta.innerHTML = eta;

//determino se l'utente ha diritto ad uno sconto, e, se si, di quanto

if (eta < 18) {

    //calcolo lo sconto del 20%
    sconto = ((prezzoProvvisorio * 20) / 100);
    console.log(sconto);

    //calcolo prezzo
    prezzoScontato = (prezzoProvvisorio - sconto).toFixed(2);
    console.log(prezzoScontato);
    
    //inserisco il prezzo calcolato
    campoPrezzoFinale.innerHTML = prezzoScontato + "€"

} else if (eta > 65) {

    //calcolo lo sconto del 40%
    sconto = ((prezzoProvvisorio * 40) / 100);
    console.log(sconto);
    //calcolo prezzo
    prezzoScontato = (prezzoProvvisorio - sconto).toFixed(2);
    console.log(prezzoScontato);

    //inserisco il prezzo calcolato
    campoPrezzoFinale.innerHTML = prezzoScontato + "€"

} else {

    //nessuno sconto, inserisco direttamente il prezzo calcolato
    campoPrezzoFinale.innerHTML = prezzoProvvisorio + "€";
}