//3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum=0;
i = 0;
while(i<valueArray.length){
    if (valueArray[i]%2 === 0){
        sum += valueArray[i];
        i++;
    } else {
        i++;
    }
}
console.log(`Odd sum is ${sum}`);

