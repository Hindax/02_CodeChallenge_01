
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// let ersteZahl, zweiteZahl;

// ersteZahl = (prompt("Bitte eine Zahl eingeben: "));
// zweiteZahl =(prompt("Bitte eine zweite Zahl enigeben:"));
// console.log(typeof ersteZahl);

// // ersteZahl = parseInt(rompt("Bitte eine Zahl eingeben: "));
// // zweiteZahl = parseInt(prompt("zweiwtw: "));


// // var ersteZahl = prompt("Bitte eine Zahl eingeben:");
// // var zweiteZahl = prompt("Bitte eine zweite Zahl eingeben"); suggestion

// // var summe =(ersteZahl +zweiteZahl);

// const summe = (ersteZahl + zweiteZahl);


// console.log("Die Summe der Zahlen ist: " + summe);

/** Lösung */
/***** variate 1********************** */

//Deklaration:
let ziffer1, ziffer2;
let zahl1, zahl2;
let summe

// Eingabe | Wertzuweisung : Ziffern
ziffer1 =prompt("Zahl 1: ");
ziffer2 =prompt("Zahlt 2: ");
console.log(typeof ziffer1);
console.log(typeof ziffer2);

//Typkonvertierung | Ziffer --> Zahl (string to number)
zahl1 = parseInt(ziffer1);
zahl2 = parseInt(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);



summe = zahl1 + zahl2;

console.log("Die Summe der Zahlen ist: " + summe);



