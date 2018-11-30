//1) Create an iffe that returns an object with three fields: variable value, function showValue() and function reverseValue().
// Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that.
// Value type string or number if number to (*(-1)) is string can be converted to umber do so.
let iife = (function () {
    return {
        variable: value = "8",
        showValue: function(){
            if (value) {
                return value
            } else {
                return "Value is not provided"
            }
        },
        reverseValue: function () {
            if(isFinite(value)){
                let parsedValue = parseFloat(value)
                return parsedValue*(-1)
            } else {
                reverseValue = value.split("").reverse().join("")
                return reverseValue
            }

    }
}}) ();

//2) Change the above iffe. So that returned object doesn’t publicly allow access to value but instead of that gives us a function setValue().
// Purpose of this function is quite easy to grasp. Closure pattern.
let iifeHidden = (function () {
  let  value = 0;
  let valueShow = function(){
        if (value) {
            return value
        } else {
            return "Value is not provided"
        }
    };

    let revValue = function () {
        if(isFinite(value)){
            let parsedValue = parseFloat(value);
            return parsedValue*(-1)
        } else {
            reverseValue = value.split("").reverse().join("");
            return reverseValue
        }
      };

    let changeValue = function (a) {
        value = a;
        return this.value
    }

        return {
            variable: value,
            showValue: valueShow,
            reverseValue:  revValue,
            setValue: changeValue
        };
    }
      ) ();

iifeHidden.setValue("majgot")
console.log(iifeHidden.showValue())
//3) Create a function definition (arrow ). This function is to take one input string/number and is to return object described in point above with value set to input.
let allData = function(val) {
    iifeHidden.setValue(val);
    let obj = {
        ourValue: iifeHidden.showValue(),
        reversedValue: iifeHidden.reverseValue()
    }
    return console.log(obj);
}
//allData("mama")

//4) Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y). Function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a Calculate function that makes calculation and returns its value.
let dod = (a,b)=> {
    return  a + b;
    //  operationName = "add"
};
let odej = (a,b)=> {
    return a-b;
    // operationName = "substract"

};
let mnoz = (a,b)=> {
    return a*b;
    //operationName = "multiply"
};
let dziel = (a,b)=> {
    return a / b;
}


let calculator = function(a,b) {
     let result = operationType(a,b);
     let operationType = mnoz
    let setOperation = function (operation){
        if (operation == '+') {
            return  operationType = dod;
        } else if (operation == '-') {
            return  operationType = odej;
        } else if (operation == '*') {
            return  operationType = mnoz;
        } else if (operation == '/') {
          return  operationType = dziel;
        } else {
            return 'wrong';
        }}

return    { a: a,
            b: b,
        operationResult: result,
    setOperation: setOperation
};}
calculator.setOperation("-")
console.log(calculator(4,5))
