//4)	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
let arrayNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let max = Math.max.apply(null, arrayNumbers),
    min = Math.min.apply(null, arrayNumbers);
console.log(`Maximum number is ${max}`);
console.log(`Minimum number is ${min}`);