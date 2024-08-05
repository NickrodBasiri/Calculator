let num1;
let num2;
let operator;
let displayValue = "";
let operatorPressed = false;

const numberButtons = document.querySelectorAll("#numButton");
const decimalButton = document.querySelector("#decimalButton");
const opperatorButtons = document.querySelectorAll("#oppButton");
const clearButton = document.querySelector("#clearButton");
const equalButton = document.querySelector("#equalButton");
const display = document.querySelector("#displayText");

display.textContent = 0;

numberButtons.forEach((button) => 
    button.addEventListener("click", function() {
        if (operatorPressed) {
            displayValue = "";
            operatorPressed = false;
        }
        displayValue += button.textContent;
        display.textContent = displayValue;
    }));

decimalButton.addEventListener("click", function() {
    if (displayValue.toString().includes(".")) {
        return;
    }
    if(display.textContent == 0) {
        displayValue = 0;
    }
    displayValue += decimalButton.textContent;
    display.textContent = displayValue; 
})

opperatorButtons.forEach((button => 
    button.addEventListener("click", function() {
        if (num1 == undefined) {
            operatorPressed = true;
            operator = button.textContent;
            num1 = displayValue;
        } else {
            num2 = displayValue;
            const result = operate(num1, num2, operator);
            displayValue = result;
            display.textContent = displayValue;
            num1 = displayValue;
            num2 = undefined;
            operatorPressed = true;
            operator = button.textContent;
        }
    })
));

equalButton.addEventListener("click", function() {
    if (num1 == undefined) {
        return;
    }
    num2 = displayValue;
    displayValue = operate(num1, num2, operator);
    display.textContent = displayValue;
    num1 = undefined;
    num2 = undefined;
});

clearButton.addEventListener("click", function() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    displayValue = "";
    display.textContent = 0;
    operatorPressed = false;
});

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
        if (num2 == 0) {
            return "ERROR";
        }
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
    return Math.round((Number(num1) * Number(num2)) * 100000) / 100000;
}

function divide(num1, num2) {
    return Math.round((Number(num1) / Number(num2)) * 100000) / 100000;
}