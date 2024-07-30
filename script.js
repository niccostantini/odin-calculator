// const operations = {
//     "+" : function(a,b) {return a+b},
//     "-" : function(a,b) {return a-b},
//     "*" : function(a,b) {return a*b},
//     "/" : function(a,b) {return a/b},
// };

const operations = {
    "plus" : "+",
    "minus" : "-",
    "times" : "*",
    "divide" : "/"
}

const equals = document.querySelector("#equals");
const comma = document.querySelector("#comma");
const reset = document.querySelector("#reset");

const display = document.querySelector(".display");
let content = display.innerHTML;

const numbers = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

function operate(a, b, o) {
let outcome;
    switch (o) {
        case "+": outcome = a+b;  break;
        case "-": outcome = a-b; break;
        case "*": outcome = a*b; break;
        case "/": outcome = a/b; break;
    }
return outcome;
}

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation")

//Initialise the variables
let firstOperand = "";
let operator = "";
let secondOperand = "";
let string = "";
let n1;
let n2;
let result = "";


function splitNumbers (string) {
    if (!operator) {}
    else {
        n1 = parseFloat(string.split(operator)[0]);
        n2 = parseFloat(string.split(operator)[1]);
    }
}

reset.addEventListener("click", () => {
    firstOperand = "";
    operator = "";
    secondOperand = "";
    string = "0";
    display.textContent = string;
})



let equallies;

comma.addEventListener("click", function(event) {
    let operand = ".";

    if (!String(firstOperand).includes(".") && (!firstOperand || !operator)) {
        firstOperand = firstOperand || "0";
        firstOperand += operand;
    } else if (operator && !secondOperand.includes(".")) {
        secondOperand = secondOperand || "0";
        secondOperand += operand;
    }

    let string = `${firstOperand}${operator}${secondOperand}`;
    console.log(string);
    display.textContent = string;
});

numberButtons.forEach(button => button.addEventListener("click", function(event) {
    let clicked = event.target;
    let write = clicked.id;
    let operand = numbers[write];

    if(!firstOperand || !operator)
        {if (!firstOperand) firstOperand = "";
         firstOperand += operand}
    else if (!secondOperand  || !equallies)
        {if (!secondOperand) secondOperand = "";
            secondOperand += operand}

    string = `${firstOperand}${operator}${secondOperand}`;
    console.log(string)
    display.textContent = string;
}))

operationButtons.forEach(button => button.addEventListener("click", function(event) {
    let clicked = event.target;
    let write = clicked.id;
    let theOperator = operations[write];

    if(!firstOperand){}
    else if (firstOperand) {
        operator = theOperator;
    }
        // {if (!secondOperand) secondOperand = "";
        //     secondOperand += operand}
            
        string = `${firstOperand}${operator}${secondOperand}`;
        console.log(string)
        display.textContent = string;
}))

equals.addEventListener("click", function() {
    splitNumbers(string);
    string = operate(n1,n2,operator)
    firstOperand = string;
    secondOperand = "";
    display.textContent = firstOperand;
})