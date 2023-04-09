const INIT_VALUE = "";
const INIT_NEGATIVE = true;

let firstValue = "";
let lastValue = "";
let result = "";
let operator = "";

let screenValue = "";
let subScreenValue = "";

let negative = true;

/**
 * setter, getter
 */

function setFirstValue(value) {
    firstValue = value;
}

function getFirstValue() {
    return firstValue;
}

function setLastValue(value) {
    lastValue = value;
}

function getLastValue() {
    return lastValue;
}

function setResult(value) {
    result = value;
}

function getResult() {
    return result;
}

function setOperator(value) {
    operator = value;
}

function getOperator() {
    return operator;
}

function setScreenValue(value) {
    screenValue = value;
}

function getScreenValue() {
    return screenValue;
}

function setSubScreenValue() {
    subScreenValue = `${getFirstValue()} ${getOperator()} ${getLastValue()}`;
}

function getSubScreenValue() {
    return subScreenValue;
}

function setNegative(value) {
    negative = value;
}

function getNegative() {
    return negative;
}

/**
 * screen
 * display main, sub screen
 * screen value merge, remove
 */

const screen = document.getElementById("output");
const subScreen = document.getElementById("sub_output");

function displayScreen() {
    screen.value = getScreenValue();
}

function displaySubScreen() {
    subScreen.value = getSubScreenValue();
}

function mergeDisplayValue(value) {
    setScreenValue(getScreenValue() + value);
}

function backspaceValue() {
    setScreenValue(getScreenValue().slice(0, -1));
}

/**
 * button function
 * calculator options
 * operator, number, negative button event
 */

const optionButton = document.querySelectorAll('.options input[type="button"]');
const operatorButton = document.querySelectorAll('.input-operator input[type="button"]');
const numberButton = document.querySelectorAll('.input-number input[type="button"]');
const negativeButton = document.querySelector(".negative");

optionButtonEvent();
operatorButtonEvent();
numberButtonEvent();
negativeEvent();

function optionButtonEvent() {
    optionButton.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.value === "BACKSPACE") {
                backspaceValue();
            } else if (button.value === "RESET") {
                resetValue();
            }

            displayScreen();
            displaySubScreen();
        });
    });
}

function operatorButtonEvent() {
    operatorButton.forEach((button) => {
        button.addEventListener("click", () => {
            if (getFirstValue() === "") {
                if (button.value !== "=") {
                    setFirstValue(getScreenValue());
                    setOperator(button.value);
                    resetScreen();
                }
            } else {
                if (button.value === "=") {
                    setLastValue(getScreenValue());
                    setResult(calculation());
                    setScreenValue(getResult());
                }
            }
            setSubScreenValue();
            displayScreen();
            displaySubScreen();
        });
    });
}

function numberButtonEvent() {
    numberButton.forEach((button) => {
        button.addEventListener("click", () => {
            mergeDisplayValue(button.value);
            displayScreen();
        });
    });
}

function negativeEvent() {
    negativeButton.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        setNegative(!getNegative());
        if (getNegative() === true) {
            removeNegative();
        } else {
            addNegative();
        }
        displayScreen();
    });
}

function addNegative() {
    setScreenValue("-" + getScreenValue());
}

function removeNegative() {
    setScreenValue(getScreenValue().replace("-", ""));
}

/**
 * calculation function
 * @returns value
 */

function calculation() {
    if (getOperator() === "+") {
        return cal.addition();
    } else if (getOperator() === "-") {
        return cal.subtraction();
    } else if (getOperator() === "*") {
        return cal.multiplication();
    } else if (getOperator() === "/") {
        return cal.division();
    }
}

const cal = {
    property: "calculation",

    addition: () => {
        return parseInt(getFirstValue()) + parseInt(getLastValue());
    },

    subtraction: () => {
        return parseInt(getFirstValue()) - parseInt(getLastValue());
    },

    multiplication: () => {
        return parseInt(getFirstValue()) * parseInt(getLastValue());
    },

    division: () => {
        return parseInt(getFirstValue()) / parseInt(getLastValue());
    },
};

/**
 * reset
 * screen, value reset
 */

function resetValue() {
    setFirstValue(INIT_VALUE);
    setLastValue(INIT_VALUE);
    setOperator(INIT_VALUE);
    setResult(INIT_VALUE);

    setScreenValue(INIT_VALUE);
    setSubScreenValue();

    setNegative(INIT_NEGATIVE);
}

function resetScreen() {
    setScreenValue(INIT_VALUE);
    setNegative(INIT_NEGATIVE);
}
