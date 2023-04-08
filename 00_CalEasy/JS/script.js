const screen = document.getElementById("output");

const optionButton = document.querySelectorAll('.options input[type="button"]');
const operatorButton = document.querySelectorAll('.input-operator input[type="button"]');
const numberButton = document.querySelectorAll('.input-number input[type="button"]');

function optionButtonEvent() {
    optionButton.forEach((button) => {
        button.addEventListener("click", () => {
            screen.value = button.value;
        });
    });
}

function operatorButtonEvent() {
    operatorButton.forEach((button) => {
        button.addEventListener("click", () => {
            screen.value = button.value;
        });
    });
}

function numberButtonEvent() {
    numberButton.forEach((button) => {
        button.addEventListener("click", () => {
            screen.value = button.value;
        });
    });
}

optionButtonEvent();
operatorButtonEvent();
numberButtonEvent();

function displayValue(value) {
    screen.value += value;
}
