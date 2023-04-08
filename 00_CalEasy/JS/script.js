const screen = document.getElementById("output");

const optionButton = document.querySelectorAll('.options input[type="button"]');
const operatorButton = document.querySelectorAll('.input-operator input[type="button"]');
const numberButton = document.querySelectorAll('.input-number input[type="button"]');

optionButtonEvent();
operatorButtonEvent();
numberButtonEvent();

function optionButtonEvent() {
    optionButton.forEach((button) => {
        button.addEventListener("dblclick", function (event) {
            mergeDisplayValue(button.value);
        });
    });
}

function operatorButtonEvent() {
    operatorButton.forEach((button) => {
        button.addEventListener("click", () => {
            mergeDisplayValue(button.value);
        });
    });
}

function numberButtonEvent() {
    numberButton.forEach((button) => {
        button.addEventListener("click", () => {
            mergeDisplayValue(button.value);
        });
    });
}

function mergeDisplayValue(value) {
    screen.value += value;
}
