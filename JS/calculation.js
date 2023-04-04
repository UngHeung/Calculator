/* ===== init ===== */
const operator = new Map([
    ["더하기", "+"],
    ["빼기", "-"],
    ["곱하기", "*"],
    ["나누기", "/"],
]);

let result = 0;

/* ===== setter ===== */
function setValue(value) {
    result = parseInt(value);
}

/* ===== getter ===== */
function getValue() {
    return result;
}
