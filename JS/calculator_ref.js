////////////////////
/* ===== init */
////////////////////

let result = 0.0;
let operator = "+";
let inputNumber = "0";
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
    inputnumber = value;
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

function displayMainScreen() {
    mainScreen.value = getInputNumber();
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
function inputData() {}

// calculator reset
function calculatorReset() {
    resetInputNumber();
    resetNegative();

    if (resetCount === 2) {
        resetResult();
        resetOperator();
    }
}

function addKeboardEvent() {
    mainScreen.addEventListener("keydown", () => {
        if (checkNumber()) {
            changeFontSize();
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

changeFontSize();

////////////////////
/* ===== calculation */
////////////////////

// function sample() {}

////////////////////
/* ===== validation check */
////////////////////

function checkNumber() {
    if ((key = /[0-9]/)) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

////////////////////
/* ===== reset */
////////////////////

/* reset value */
function resetInputNumber() {
    const initInputNumber = "0";
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
