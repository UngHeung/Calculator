/* ===== init ===== */
const operator = new Map([
    ["더하기", "+"],
    ["빼기", "-"],
    ["곱하기", "*"],
    ["나누기", "/"],
    ["제곱", "^"],
    ["제곱근", "√"],
]);

let negative = true; // 양수는 true, 음수는 false;
let mainValue = ""; // 현재 입력한 값
let subValue = ""; // 계산중인 값
let inputNumber = 0;
let result = 0;

/* ===== setter ===== */
function setResult(value) {
    result = value;
}

function setInputNumber(number) {
    inputNumber = number;
}

function setMainValue(value) {
    mainValue = value;
}

function setSubValue(value) {
    subValue = value;
}

/* ===== getter ===== */
function getResult() {
    return result;
}

function getInputNumber() {
    return inputNumber;
}

function getMainValue() {
    return mainValue;
}

function getSubValue() {
    return subValue;
}

/* ===== display ===== */
const mainDisplay = document.getElementById("main_display");
const subDisplay = document.getElementById("sub_display");

/* ===== function ===== */
/* calculator button event */
const calButton = document.querySelectorAll(".keypad input");

/* 버튼 액션 */
function calButtonEvent() {
    calButton.forEach((button) => {
        button.addEventListener("click", () => {
            classificationButton(button);
        });
    });
}

calButtonEvent();

/* 버튼 분류 */
function classificationButton(button) {
    const element = button.getAttribute("class");
    if (element === "number") {
        console.log(button.value);
    } else if (element === "operator") {
        console.log(button.value);
    } else if (element === "negative") {
        console.log(button.value);
    } else if (element === "decimal") {
        console.log(button.value);
    } else if (element === "clear") {
        console.log(button.value);
    }

    console.log(1);
}

/* ===== reset ===== */
