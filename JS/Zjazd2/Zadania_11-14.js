function dzienTygodnia(){
    var data = new Date();

dzien = data.getDay();
switch(dzien){
    case 0: console.log("Dziś jest niedziela!"); break;
    case 1: console.log("Dziś jest poniedziałek!"); break;
    case 2: console.log("Dziś jest wtorek!"); break;
    case 3:console.log("Dziś jest środa!"); break;
    case 4: console.log("Dziś jest czwartek!"); break;
    case 5: console.log("Dziś jest piątek!"); break;
    case 6:console.log("Dziś jest sobota!") ; break;
    default: console.log("Dziś mamy nieznany dzień tygodnia");
} }

dzienTygodnia();

function doWeekendu(){
let dataa = new Date();
let dzienTydznia = dataa.getDay();
//let dzienTydznia = 5;
switch(dzienTydznia){
    case 1:
    case 2:
    case 3:
    case 4:
    dniDo = 6-dzienTydznia;
    console.log(`Do weekendu zostało ${dniDo} dni`);
    break;
    case 5: console.log(`Do weekendu został dzień`);
    break;
    default:
        console.log("Jest weekend");
}}

doWeekendu();

function basicOperations(a,b){
   let dodawanie = a+b;
   let odejmowanie = a-b;
   let mnozenie = a*b;
   let dzielenie = a/b;
    console.log(`Cztery podstawowe operacje na liczbie ${a} i ${b}`);
    console.log(`Wynik dodawania to ${dodawanie}`);
    console.log(`Wynik odejmowania to ${odejmowanie}`);
    console.log(`Wynik mnożenia to ${mnozenie}`);
    console.log(`Wynik dzielenia to ${dzielenie}`);
}
basicOperations(7,5)


