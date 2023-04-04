/* ===== init ===== */
const operator = new Map([
    ["더하기", "+"],
    ["빼기", "-"],
    ["곱하기", "*"],
    ["나누기", "/"],
    ["제곱", "^"],
    ["제곱근", "√"],
]);

let result = 0;
let display = "";
let negative = true; // 양수는 true, 음수는 false;

/* ===== setter ===== */
function setValue(value) {
    result = parseInt(value);
}

/* ===== getter ===== */
function getValue() {
    return result;
}

/* ===== module ===== */

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
