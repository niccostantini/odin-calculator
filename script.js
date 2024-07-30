/** CONSTANT INITIALIZATION */

const operations = {
    "plus" : "+",
    "minus" : "-",
    "times" : "*",
    "divide" : "/"
}

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

/** GET BUTTONS AND DISPLAY */

const allButtons = document.querySelectorAll("button");
const equals = document.querySelector("#equals");
const comma = document.querySelector("#comma");
const reset = document.querySelector("#reset");
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation")
const signChange = document.querySelector("#sign");
const nailsButton = document.querySelector("#nails")

const green = document.querySelector("#green");
const pink = document.querySelector("#pink");

let theme = "green";

/**DEFINE FUNCTIONS */

/**CHOOSE THE OPERATION BASED ON INPUT. A = FIRST NUMBER; B = SECOND NUMBER; O = OPERATOR */
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

function changeTheme () {
   if (green.rel == "stylesheet") {green.rel = "alternate stylesheet"; pink.rel = "stylesheet"}
   else if (pink.rel == "stylesheet") {green.rel = "stylesheet"; pink.rel = "alternate stylesheet"}
}

/**THIS FUNCTION GETS THE SINGLE NUMBERS TO BE OPERATED UPON*/
function splitNumbers (string) {
    if (!operator) {}
    else {
        n1 = parseFloat(string.split(operator)[0]);
        n2 = parseFloat(string.split(operator)[1]);
    }
}

function changeSign(a) {
    if (!a.includes("-")) {a = "-" + a; return a}
    else {
        temp = parseFloat(a);
        temp = temp - (2*temp)
        return temp
    }
}

/**Initialise the variables*/
let firstOperand = "";
let operator = "";
let secondOperand = "";
let string = "";
let n1;
let n2;
let result = "";

/**Define the buttons' functions */

reset.addEventListener("click", () => {
    firstOperand = "";
    operator = "";
    secondOperand = "";
    string = "0";
    display.textContent = string;
})

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
    else if (!secondOperand)
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

        string = `${firstOperand}${operator}${secondOperand}`;
        console.log(string)
        display.textContent = string;
}))

equals.addEventListener("click", function() {
    if(!secondOperand) {
        secondOperand = n2;
        string = `${firstOperand}${operator}${secondOperand}`
    }
    splitNumbers(string);
    string = operate(n1,n2,operator)
    firstOperand = String(string);
    secondOperand = "";
    display.textContent = firstOperand;
})

signChange.addEventListener("click", () => {
    if (!secondOperand) {firstOperand = changeSign(firstOperand);}
    else if (operator) {secondOperand = changeSign(secondOperand);}
    string = `${firstOperand}${operator}${secondOperand}`
    display.textContent = string;
})

nailsButton.addEventListener("click", () => changeTheme())