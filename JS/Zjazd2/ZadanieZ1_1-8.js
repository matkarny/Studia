let arrayE = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];
//
//1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
//

function arraySum(arra) {
    let suma = 0;
    let i = 0;
    while (i < arra.length) {
        suma += arra[i];
        i++
    } return console.log(`Sum of all numbers in array is ${suma}`);
}

//arraySum(arrayE);

//
// 2)	Create a function that returns sum of first and last elements of given array.
//

function arrayFirstLast(arra){
  let z = arra.length-1;
      suma2 = arra[0] + arra[z];
    return console.log(`Sum of first and last number in array is ${suma2}`)
}

//arrayFirstLast(arrayE);

//3)	Create a function that takes a number and return factorial of that number.
//
function factorialOfNumber(a){
   let number = parseInt(a.length*Math.random());
   console.log();
   let i = number;
    result = 1;
    while(i>0){
        result *= i;
        i--
    } return console.log(`Chosen number ${number} and factorial of this number is ${result}`)
}

//factorialOfNumber(arrayE);

//
// 4)	Create a function that returns given array in reverse order. // no build in functions 
//
function reverseArrayGood(arr) {
    let revArr = [];
    let i = arr.length - 1;
    while(arr.length !== revArr.length) {
        popObj = arr[i];
        revArr.push(popObj);
        i--
    } return revArr
}
//console.log(reverseArrayGood(arrayE));
//console.log(arrayE);

// function reverseArrayBad(arr) {
//     let revArr = []
//     while(arr.length>0) {
//         revArr.push(arr.pop())
//     } return arr = revArr
//     }
// console.log(reverseArrayBad(arrayE));
// console.log(arrayE);


//5)	Create a function that based on given array returns new array in pattern [a,b,c,d,e,d] -> [a+b, c+d, e+d]
let newArray = [1,3,4,1,3];

function sumPair(arrGiven) {
   let arrT = [];
   let i = 0;
    while (i <arrGiven.length) {
        let exampleArray = [];
        let pop1 = arrGiven[i];
        i++;
        let pop2 = arrGiven[i];
        i++;
        console.log(pop1);
        console.log(pop2);
    let arrPushNumber = pop1 + pop2;
    arrT.push(exampleArray)
} return console.log(exampleArray)
}
// arrTwice(newArray)
// reverseArrayGood(newArray);

//hlp

//console.log(newArray);
function sumDouble(newArrayPlus){
    arrTwice=[];

    while(newArrayPlus.length>0) {
        let pop1 = newArrayPlus.shift();
        let pop2 = newArrayPlus.shift();
        if(pop2===undefined) {
            pop2=0
        }
        arrPushNumber = pop1 + pop2;
        arrTwice.push(arrPushNumber)
    } return   console.log(arrTwice)

}
//sumDouble(newArray);
//console.log(newArray);

//6)	For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
function sumDoubleLast(arrGiven){
    let newArrayPlus = arrGiven;
    arrTwice=[];

    while(newArrayPlus.length>0) {

        let pop1 = newArrayPlus.shift();
        let pop2 = newArrayPlus.shift();
        //console.log(pop1);
        //console.log(pop2);
        if(pop2===undefined) {
            pop2=pop1
        }
      //console.log(pop2);
        arrPushNumber = pop1 + pop2;
        arrTwice.push(arrPushNumber)
   //console.log(arrTwice)

    }
    // console.log(arrGiven)
    // console.log(newArrayPlus)
    // console.log(arrTwice)
return  console.log(arrTwice)
}
// sumDoubleLast(newArray);
//console.log(newArray);

//7)	Create a function the return one random element from given array. // use random function
function randomNumber(b){
    let number = parseInt(b.length*Math.random());
    let  printNumber = b[number];
return console.log(`Chosen number from has position ${number} and value ${printNumber}`)
}

// randomNumber(arrayE);


//8)	Create a function that takes two parameters array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
function randomLowest(arr, t){
    let array = arr;
    let times = t;
    let minArray = [];
    while(times>0){
        let n = parseInt(array.length*Math.random());
        minArray.push(arr[n]);
        times--
    }
    return   console.log(`Min object is ${Math.min(...minArray)} from array ${minArray}`)
}

//randomLowest(arrayE,3);

//9)	Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array.


let number = parseInt(a.length*Math.random());
