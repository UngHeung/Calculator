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

function calButtonEvent() {
    calButton.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.value);
        });
    });
}

calButtonEvent();
