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
    ballsOfSteel[parseInt(8 * Math.random())].weight += addition;
    if (ballsOfSteel.length === 8) {
        let arr1 = ballsOfSteel;
        let arr2 = [];
        while (arr1.length > 4) {
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
    if (ballsOfSteel.length === 4) {
        let arr3 = ballsOfSteel;
        let arr4 = [];
        while (arr3.length > 2) {
            arr4.push(arr3.pop())

        }
        let secondWeight = 0;
        arr3.forEach(x => secondWeight += x.weight);
        if (secondWeight === 2*weight) {
            ballsOfSteel = arr4
        } else {
            ballsOfSteel = arr3
        }
    }
    if (ballsOfSteel[0].weight === weight) {
        console.log(`The biggest ball of steel is ${ballsOfSteel[1].name} with weight ${ballsOfSteel[1].weight}`)
    } else {
        console.log(`The biggest ball of steel is ${ballsOfSteel[0].name} with weight ${ballsOfSteel[0].weight}`)
    }
}


theBiggestBall(40,5);