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
 // Counting module until we find final pair
   if(ballsOfSteel.length ==! 2) {
       if (ballsOfSteel.length === ballsOfSteel.length/2) {
           let arr1 = ballsOfSteel;
           let arr2 = [];
           while (arr1.length > ballsOfSteel.length/2) {
               arr2.push(arr1.pop())

           }
           let firstWeight = 0;
           arr1.forEach(i => firstWeight += i.weight);
           if (firstWeight === 4*weight) {
               ballsOfSteel = arr2
           } else {
               ballsOfSteel = arr1
           }
       }
   } else {

    if (ballsOfSteel[0].weight === weight) {
        console.log(`The biggest ball of steel is ${ballsOfSteel[1].name} with weight ${ballsOfSteel[1].weight}`)
    } else {
        console.log(`The biggest ball of steel is ${ballsOfSteel[0].name} with weight ${ballsOfSteel[0].weight}`)
    }
}
}

theBiggestBall(50,10);