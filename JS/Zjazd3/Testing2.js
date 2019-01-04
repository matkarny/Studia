let balls = [
    {
        id: 1,
        name: 'ball 1',
        weight: 10
    },
    {
        id: 2,
        name: 'ball 2',
        weight: 11
    },
    {
        id: 3,
        name: 'ball 3',
        weight: 10
    },
    {
        id: 4,
        name: 'ball 4',
        weight: 10
    },
    {
        id: 5,
        name: 'ball 5',
        weight: 10
    },
    {
        id: 6,
        name: 'ball 6',
        weight: 10
    },
    {
        id: 7,
        name: 'ball 7',
        weight: 10
    },
    {
        id: 8,
        name: 'ball 8',
        weight: 10
    },
];

const groupBalls = (balls) => {
    if(balls.length !== 8) {
        throw 'Wrong size of balls array!';
    }
    let grouppedBalls = [];
    let group = [];
    for (let i = 0; i < balls.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            grouppedBalls.push(group);
            group = [];
        }
        group.push(balls[i]);
    }
    grouppedBalls.push(group);
    return grouppedBalls;
};

const makeMeasurement = (group1, group2) => {
    let grouppedWeight1 = 0;
    group1.forEach(e => grouppedWeight1 += e.weight);
    let grouppedWeight2 = 0;
    group2.forEach(e => grouppedWeight2 += e.weight);
    if(grouppedWeight1 > grouppedWeight2) {
        return {
            difference: true,
            result: group1
        };
    }
    if(grouppedWeight2 > grouppedWeight1) {
        return {
            difference: true,
            result: group2
        };
    }
    return {
        difference: false
    };
};

const resolveScaleRiddle = (balls) => {
    let grouppedBalls = groupBalls(balls);
    let firstResult = makeMeasurement(grouppedBalls[0], grouppedBalls[1]);
    if (firstResult.difference) {
        let final = firstResult.result;
        let secondResult = makeMeasurement([final[0]], [final[1]]);
        if(secondResult.difference) {
            return secondResult.result[0];
        } else {
            return final[2];
        }
    } else {
        let final = grouppedBalls[2];
        let secondResult = makeMeasurement([final[0]], [final[1]]);
        return secondResult.result[0];
    }
};

let resolved = resolveScaleRiddle(balls);
console.log(`Biigest is ${resolved.name} with id ${resolved.id} and weight ${resolved.weight}`);