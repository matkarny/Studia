module.exports = nextStepPoint = (startingPoint, vector) =>{
    let endingPoint;
    if(vector){
        endingPoint = startingPoint+1
    }	else {
        endingPoint = startingPoint-1
    }

    return endingPoint

};
