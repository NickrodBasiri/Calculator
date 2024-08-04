let num1;
let num2;
let operator;
let displayValue = "";


const numberButtons = document.querySelectorAll("#numButton");
const opperatorButtons = document.querySelectorAll("#oppButton");
const clearButton = document.querySelector("#clearButton");
const equalButton = document.querySelector("#equalButton");
const display = document.querySelector("#displayText");

numberButtons.forEach((button) => 
    button.addEventListener("click", function() {
        displayValue += button.textContent;
        display.textContent = displayValue;
    }));

opperatorButtons.forEach((button => 
    button.addEventListener("click", function() {
       // if (!(num1 == null)) {
       //     num2 == displayValue;
       // } else if (!(num1 == null) && !(num2 == null)) {
       //     operator = button.textContent;
       //     num1 = operate(num1, num2, operator);
       //     displayValue = num1;
       //     display.textContent = displayValue;
       // }
        num1 = displayValue;
        operator = button.textContent;
        displayValue = "";
        display.textContent = displayValue;
        console.log(num1);
        console.log(displayValue);
        console.log(operator);
    })
))

equalButton.addEventListener("click", function() {
    num2 = displayValue;
    displayValue = operate(num1, num2, operator);
    display.textContent = displayValue;
    console.log(displayValue);
    console.log(num2);
})


clearButton.addEventListener("click", () => console.log(num1));

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    }
    if (operator == "-") {
        return subtract(num1, num2);
    }
    if (operator == "*") {
        return multiply(num1, num2);
    }
    if (operator == "/") {
        return divide(num1, num2);
    }
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

