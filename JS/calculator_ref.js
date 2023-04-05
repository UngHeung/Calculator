////////////////////
/* ===== init */
////////////////////

let result = 0.0;
let operator = "+";
let inputNumber = "0";
let negative = true;

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

// getter
function getResult() {
    return result;
}

function getOperator() {
    return operator;
}

function getInputNumber() {
    return inputnumber;
}

function getNegative() {
    return negative;
}

////////////////////
/* ===== process */
////////////////////

function sample() {}

////////////////////
/* ===== calculation */
////////////////////

function sample() {}

////////////////////
/* ===== reset */
////////////////////

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

function resetCalculator() {
    resetInputNumber();
    resetNegative();

    if (resetCount === 2) {
        resetResult();
        resetOperator();
    }
}
