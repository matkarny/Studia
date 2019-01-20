//5)	Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. One loop run
let arrayWords = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
let longest = "";
for (i=0; i<arrayWords.length; i++){
    if (arrayWords[i].length > longest.length){
        longest= arrayWords[i];
    }
}
console.log(`The longest word is ${longest}`);
