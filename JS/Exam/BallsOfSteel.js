function theBiggestBall(weight,addition) {
    let ballsOfSteel = [
        {
            name: 'ball 1',
            weight: weight
        },
        {
            name: 'ball 2',
            weight: weight
        },
        {
            name: 'ball 3',
            weight: weight
        },
        {
            name: 'ball 4',
            weight: weight
        },
        {
            name: 'ball 5',
            weight: weight
        },
        {
            name: 'ball 6',
            weight: weight
        },
        {
            name: 'ball 7',
            weight: weight
        },
        {
            name: 'ball 8',
            weight: weight
        },
    ];
    ballsOfSteel[parseInt(8 * Math.random())].weight += addition; //adding weight to random ball

 let   arr1 = [ballsOfSteel[0],ballsOfSteel[1],ballsOfSteel[2]];
 let   arr2 = [ballsOfSteel[3],ballsOfSteel[4],ballsOfSteel[5]];
        //First weighing
        let firstWeight = 0;
        let secondWeight = 0;
        arr1.forEach(i => firstWeight += i.weight);
        arr2.forEach(i => secondWeight += i.weight);
        let biggestBall = [];
if(firstWeight>secondWeight){
    if(arr1[0].weight>arr1[1].weight){
        biggestBall = arr1[0]
    } else if (arr1[0].weight<arr1[1].weight) {
        biggestBall = arr1[1]
    } else {
        biggestBall = arr1[2]
    }
    aBall = biggestBall }
else if (firstWeight<secondWeight) {
    if(arr2[0].weight>arr2[1].weight){
        biggestBall = arr2[0]
    } else if (arr2[0].weight<arr2[1].weight) {
        biggestBall = arr2[1]
    } else {
        biggestBall = arr2[2]
    }
    aBall = biggestBall
} else {
    if (ballsOfSteel[6].weight === weight) {
        biggestBall = ballsOfSteel[7]
    } else {
        biggestBall = ballsOfSteel[6]
    }
    aBall = biggestBall
}

console.log(`The biggest ball of steel is ${aBall.name} with weight ${aBall.weight}`)
}


theBiggestBall(6,10);
