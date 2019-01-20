const dataFile = require('./JSONdata');

//console.log(typeof dataFile)
// console.log(typeof stringDataFile);
// console.log(stringDataFile)

function DetailsOfPayent(name,operation,date) {
    this.Type = operation;
    this.company = name;
    this.date = date
}

function Object(cost) {
    this.cost = cost;
    // this.detailsOfPayent = new DetailsOfPayent()

}
// let details = new Object(DetailsOfPayent)
let everyCost = dataFile.forEach((e) => pietruszka + e.cost);

// console.log(dataFile.map((o) => new DetailsOfPayent(o.name[0],o.operation,o.date)))
console.log(everyCost);

// function Object(cost,) {
//     this.cost = cost;
//
// }
// console.log(dataFile.map((o)=> new Object(o.cost.split(" ")[0])))

