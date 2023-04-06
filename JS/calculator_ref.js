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

function getMainScreenValue() {
    const value = parseFloat(mainScreen.value);
    setInputNumber(value);
    return inputNumber;
}

function displaySubScreen() {
    subScreen.textContent = getResult();
}

////////////////////
/* ===== process */
////////////////////

// function sample() {}

////////////////////
/* ===== function */
////////////////////

// input data
const numberButtonList = document.querySelectorAll(".number");
const operatorButtonList = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");

function addButtonEvent() {}

// keyboard event
function addKeboardEvent() {
    mainScreen.addEventListener("keydown", (value) => {
        const key = value.key;
        console.log(key);

        if (checkNumber(key)) {
            setInputNumber(getInputNumber() + key);

            displayMainScreen("inputNumber");
            changeFontSize();
        } else if (checkOperator(key)) {
            classificationOperator(key);

            resetInputNumber();

            displayMainScreen("inputOperator");
            displaySubScreen();
            changeFontSize();
        } else if (checkEscape(key)) {
            resetCount = 2;
            calculatorReset();

            displayMainScreen("inputNumber");
            displaySubScreen();
        } else if (checkBackspace(key)) {
            backspace();
            displayMainScreen("inputNumber");
        }
    });
}

addKeboardEvent();

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

function classificationOperator(key) {
    const newOperator = key;
    if (operator === "+") {
        addition(getInputNumber());
    } else if (operator === "-") {
        subtraction(getInputNumber());
    } else if (operator === "*") {
        multiplication(getInputNumber());
    } else if (operator === "/") {
        division(getInputNumber());
    }

    setOperator(newOperator);
    console.log(operator);
}

function backspace() {
    const inputValue = getInputNumber().substring(0, getInputNumber().length - 1);
    console.log(inputNumber);
    setInputNumber(inputValue);
}

////////////////////
/* ===== calculation */
////////////////////
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
