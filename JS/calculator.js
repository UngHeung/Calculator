/* ===== init ===== */
const operatorMap = new Map([
    ["더하기", "+"],
    ["빼기", "-"],
    ["곱하기", "*"],
    ["나누기", "/"],
    ["제곱", "^"],
    ["제곱근", "√"],
]);

let mainNegative = true; // 양수는 true, 음수는 false;
let subNegative = true; // sub
let mainValue = "0"; // 현재 입력한 값
let subValue = "0"; // 계산중인 값
let inputNumber = 0;
let result = 0;

let resetCount = 0; // 한번 누르면 현재 입력된 값만, 두번 누르면 계산기 초기화

/* ===== setter ===== */
function setMainNegative(value) {
    negative = value;
}

function setSubNegative(value) {
    negative = value;
}

function setResult(number) {
    result = number;
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

function setResetCount(count) {
    resetCount = count;
}

/* ===== getter ===== */
function getNegative() {
    return negative;
}
function getSubNegative() {
    return negative;
}

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

function getResetCount() {
    return resetCount;
}

/* ===== calculation ===== */
function addition(value) {
    return result + value;
}

function subtraction(value) {
    return result - value;
}

function multiplication(value) {
    return result * value;
}

function division(value) {
    return result / value;
}

function square() {
    return Math.pow(inputNumber);
}

function squareRoot() {
    return Math.sqrt(inputNumber);
}

/* ===== display ===== */
const mainDisplay = document.getElementById("main_display");
const subDisplay = document.getElementById("sub_display");

function displayMain() {
    mainDisplay.textContent = getMainValue().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displaySub() {
    subDisplay.textContent = getSubValue().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

/* reset button event */
const resetButton = document.querySelector(".clear");

function resetButtonEvent() {
    resetButton.addEventListener("click", () => {
        resetValue();
        resetDisplay();
    });
}

resetButtonEvent();

/* 버튼 분류 */
function classificationButton(button) {
    const element = button.getAttribute("class");
    if (element === "number") {
        numberButton(button.value);
        console.log(button.value);
        return;
    } else if (element === "operator") {
        console.log(button.value);
        return;
    } else if (element === "negative") {
        console.log(button.value);
        return;
    } else if (element === "decimal") {
        console.log(button.value);
        return;
    } else if (element === "clear") {
        console.log(button.value);
        return;
    }

    console.log(error);
}

/* 입력 값을 mainValue에 추가 */
// 입력할 때마다 리셋카운트 초기화

function numberButton(number) {
    let value = getMainValue() + number;
    setMainValue(value);
    displayMain();
    resetResetCount();
}

function operatorButton(operator) {}

/* 입력된 값(mainValue)을 정수 값으로 변경해서 inputNumber에 입력 */

/* 새로운 값 입력시 기존 입력값은 result, subValue로 이동 */

/* 사칙연산은 기존값을 기준으로 입력값을 계산 */

/* 제곱, 제곱근은 입력값 자체를 기준으로 계산 */

/* ===== reset ===== */
function resetDisplay() {
    mainDisplay.textContent = getMainValue(); // 메인 화면

    if (getResetCount() === 1) {
        subDisplay.textContent = getSubValue(); // 서브 화면
    }
}

function resetResetCount() {
    const initResetCount = 0;
    setResetCount(initResetCount);
}

function resetValue() {
    const initNegative = "true"; // 네거티브 값
    const initTextValue = "0"; // 표시되는 텍스트 값
    const initNumberValue = 0; // 계산중인 데이터 값
    const resetCount = getResetCount(); // 리셋 버튼을 누른 횟수

    setMainNegative(initNegative);
    setMainValue(initTextValue);
    setInputNumber(initNumberValue);
    setResetCount(resetCount + 1); // 리셋 버튼 클릭 카운트 ++

    if (getResetCount() === 2) {
        setMainNegative(initNegative);
        setSubValue(initTextValue);
        setResult(initNumberValue);
        resetResetCount();
    }

    console.log(resetCount);
}
