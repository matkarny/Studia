let aString = "dupa"

String.prototype.reverse=function(){return this.split("").reverse().join("");}

// String.prototype.reverse = () => {
//     return this.split("").reverse().join("");
// };

console.log(aString.reverse())

let aNumber = 18062018

Number.prototype.reverse = function(){ let numberr = this.toString().split("").reverse().join("");
return parseFloat(numberr)}

console.log(aNumber.reverse());

