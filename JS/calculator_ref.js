////////////////////
/* ===== init */
////////////////////

let result = 0.0;
let operator = "+";
let inputNumber = "";
let negative = true;
let decimal = false;
let resetCount = 0;

////////////////////
/* ===== setter, getter */
////////////////////

// setter
function setResult(value) {
    result = value;
}

function setOperator(value) {
    operator = value;
}

function setInputNumber(value) {
    inputNumber = value;
}

function setNegative(value) {
    negative = value;
}

function setDecimal(value) {
    decimal = value;
}

// getter
function getResult() {
    return result;
}

function getOperator() {
    return operator;
}

function getInputNumber() {
    return inputNumber;
}

function getNegative() {
    return negative;
}

function getDecimal() {
    return decimal;
}

////////////////////
/* ===== screen */
////////////////////
const mainScreen = document.getElementById("main_screen");
const subScreen = document.getElementById("sub_screen");

function displayMainScreen(type) {
    if (type === "inputNumber") {
        mainScreen.value = getInputNumber();
    } else if (type === "inputOperator") {
        mainScreen.value = getResult();
    }
}

function displaySubScreen(type) {
    if (type === "result") {
        subScreen.textContent = getResult();
    } else {
        subScreen.textContent = `${getResult()} ${getOperator()}`;
    }
}

////////////////////
/* ===== process */
////////////////////

// function sample() {}

////////////////////
/* ===== function */
////////////////////

// input button
const numberButtonList = document.querySelectorAll(".number");
const operatorButtonList = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const negativeButton = document.querySelector(".negative");

function addButtonEvent() {}

// keyboard event
function addKeboardEvent() {
    mainScreen.addEventListener("keydown", (value) => {
        const key = value.key;
        console.log(key);

        if (checkNumber(key)) {
            numberEvent(key);
        } else if (checkOperator(key)) {
            operatorEvent(key);
        } else if (checkBackspace(key)) {
            backspaceEvent();
        } else if (checkEscape(key)) {
            escapeEvent();
        }
    });
}

addKeboardEvent();

// number, operator, backspace, escape
function numberEvent(key) {
    setInputNumber(getInputNumber() + key);

    displayMainScreen("inputNumber");
    changeFontSize();
}

function operatorEvent(key) {
    if (checkInputNumber()) {
        calculation();
        resetInputNumber();
    }
    setOperator(key);

    displayMainScreen("inputOperator");
    displaySubScreen();
    changeFontSize();
}

function backspaceEvent() {
    backspace();

    displayMainScreen("inputNumber");
}

function escapeEvent() {
    resetCount = 2;
    calculatorReset();

    displayMainScreen("inputNumber");
    displaySubScreen();
}

function negativeEvent() {
    if (checkInputNumber()) {
        changeNegative("-");

        displayMainScreen("inputNumber");
    }
}

// font size change
function changeFontSize() {
    const valueLength = mainScreen.value.length;

    if (valueLength <= 13) {
        mainScreen.style.fontSize = "40px";
    } else if (13 < valueLength && valueLength <= 20) {
        mainScreen.style.fontSize = "30px";
    } else if (20 < valueLength) {
        mainScreen.style.fontSize = "20px";
    }
}

function backspace() {
    const inputValue = getInputNumber().substring(0, getInputNumber().length - 1);
    setInputNumber(inputValue);
}

function changeNegative(value) {
    setNegative(!getNegative());

    if (getNegative() === true) {
        setInputNumber(getInputNumber().replace(value, ""));
    } else if (getNegative() === false) {
        setInputNumber(value + getInputNumber());
    }
    console.log(inputNumber);
}

////////////////////
/* ===== calculation */
////////////////////
function calculation() {
    if (getOperator() === "+") {
        addition(getInputNumber());
    } else if (getOperator() === "-") {
        subtraction(getInputNumber());
    } else if (getOperator() === "*") {
        multiplication(getInputNumber());
    } else if (getOperator() === "/") {
        division(getInputNumber());
    }
}

function addition(value) {
    const inputValue = parseFloat(value);
    result += inputValue;
}

function subtraction(value) {
    const inputValue = parseFloat(value);
    result -= inputValue;
}

function multiplication(value) {
    const inputValue = parseFloat(value);
    result *= inputValue;
}

function division(value) {
    const inputValue = parseFloat(value);
    result /= inputValue;
}

function square() {
    const inputValue = parseFloat(value);
    inputValue = Math.pow(inputValue);
}

function squareRoot() {
    const inputValue = parseFloat(value);
    inputValue = Math.sqrt(inputValue);
}

// function sample() {}

////////////////////
/* ===== validation check */
////////////////////
function checkNumber(key) {
    const testCase = /\d/;
    if (testCase.test(key)) {
        return true;
    }
    return false;
}

function checkOperator(key) {
    const testCase = /[+*-/=]/;
    if (testCase.test(key)) {
        return true;
    }
    return false;
}

function checkEscape(key) {
    if (key === "Escape") {
        console.log(key);
        return true;
    }
    return false;
}

function checkBackspace(key) {
    if (key === "Backspace") {
        console.log(key);
        return true;
    }
    return false;
}

function checkInputNumber() {
    if (inputNumber != "") {
        return true;
    }
    return false;
}

////////////////////
/* ===== reset */
////////////////////

/* calculator reset */
function calculatorReset() {
    resetInputNumber();
    resetNegative();

    if (resetCount === 2) {
        resetResult();
        resetOperator();
        resetCount = 0;
    }
}

/* reset value */
function resetInputNumber() {
    const initInputNumber = "";
    inputNumber = initInputNumber;
}

function resetResult() {
    const initResult = 0.0;
    result = initResult;
}

function resetOperator() {
    const initOperator = "+";
    operator = initOperator;
}

function resetNegative() {
    const initNegative = true;
    negative = initNegative;
}

/* reset display */
function resetDisplay() {
    mainScreen.textContent = "";
}
