//1)	From years in array check for leap years [1974, 1900, 1985, 2000]
let year = [1974, 1900, 1985, 2000];
for( i = 0; i < year.length; i++){
    if ((year[i] % 100 === 0 || year[i] % 4 === 0) && year[i] % 400 !== 0) {
        console.log(`Rok ${year[i]} jest przestępny`);
    } else {
        console.log(`Rok ${year[i]} jest nieprzestępny`)
    }
}