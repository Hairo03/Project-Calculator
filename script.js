let firstOperand;
let secondOperand;
let firstOperator;
let secondOperator;

const display = document.querySelector("p");

let displayOperators = {
    "add": " + ",
    "subtract": " - ",
    "multiply": " * ",
    "divide": " / "
}

let btns = document.querySelectorAll("button");

btns.forEach((btn) =>
    btn.addEventListener("click", () => {
        if (btn.id) {
            if (btn.id == "clear") {
                clearDisplay();
            }
            else if (btn.id == "equals") {
                calculateAndMove();
            }
            else {
                opHandler(btn.id)
            }
            setDisplay();
        }
    }))

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(array) {
    return array.reduce((total, currentNumber) => total * currentNumber, 1);
}

function divide(array) {
    return array.reduce((total, currentNumber) => total / currentNumber);
}

function opHandler(id) {
    if (isOperand(id) && firstOperator == undefined) {
        if (firstOperand == undefined) {
            firstOperand = id;
        }
        else {
            firstOperand += id;
        }
    }
    else if (firstOperator == undefined) {
        firstOperator = id;
    }
    else if (isOperand(id)) {
        if (secondOperand == undefined) {
            secondOperand = id;
        }
        else {
            secondOperand += id;
        }
    }
    else {
        calculateAndMove();
        firstOperator = id;
    }
}

function calculateAndMove() {
    if (firstOperand && secondOperand && firstOperator != undefined) {
        firstOperand = operate(firstOperator, Number(firstOperand), Number(secondOperand))
        secondOperand = undefined;
        firstOperator = undefined;
    }
}

function clearDisplay() {
    firstOperand = undefined;
    secondOperand = undefined;
    firstOperator = undefined;
    displayValue = 0;
}

function isOperand(id) {
    return id != "add"
        && id != "subtract"
        && id != "multiply"
        && id != "divide"
        && id != "equals"
        && id != "clear"
}

function setDisplay() {
    let displayValue = "";

    if (firstOperand != undefined) {
        displayValue += firstOperand;
    }

    if (firstOperator != undefined) {
        displayValue += displayOperators[firstOperator];
    }

    if (secondOperand != undefined) {
        displayValue += secondOperand;
    }


    display.textContent = (displayValue);
}

function operate(operator, num1, num2) {
    
    if (operator == "add") {
        return result = add(num1, num2);
    }
    else if (operator == "subtract") {
        return result = subtract(num1, num2);
    }
    else if (operator == "multiply") {
        return result = multiply([num1, num2])
    }
    else if (operator == "divide") {
        return result = divide([num1, num2])
    }
}



