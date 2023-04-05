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
let displayValue = "0"; // 현재 입력한 값, 화면 표시용
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

function setdisplayValue(value) {
    displayValue = value;
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

function getDisplayValue() {
    return displayValue;
}

function getResetCount() {
    return resetCount;
}

/* ===== calculation ===== */
function addition() {
    return result + inputNumber;
}

function subtraction() {
    return result - inputNumber;
}

function multiplication() {
    return result * inputNumber;
}

function division() {
    return result / inputNumber;
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
    mainDisplay.textContent = getDisplayValue().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displaySub() {
    subDisplay.textContent = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        return;
    } else if (element === "operator") {
        operatorButton(button.value);
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

    console.log("error");
}

/* 입력 값을 displayValue에 추가 */
// 입력할 때마다 리셋카운트 초기화

function numberButton(number) {
    let value;

    if (checkInitDisplay()) {
        // 맨 처음 값이 0일 때 0을 지워준다.
        setResult(addition());
        setdisplayValue("");
    }

    value = getDisplayValue() + number;

    setdisplayValue(value);
    displayMain();
    inputToNumber();
    resetResetCount();
}

function inputToNumber() {
    const number = parseFloat(getDisplayValue());
    setInputNumber(number);
}

function operatorButton(operator) {
    if (operator === "더하기") {
        setResult(addition());
    } else if (operator === "빼기") {
        setResult(subtraction());
    } else if (operator === "곱하기") {
        setResult(multiplication());
    } else if (operator === "나누기") {
        setResult(division());
    } else if (operator === "제곱") {
        setInputNumber(square());
    } else if (operator === "제곱근") {
        setInputNumber(squareRoot());
    } else if (operator === "=") {
        setResult();
    }

    console.log("prrr");
}

/* 입력된 값(displayValue)을 정수 값으로 변경해서 inputNumber에 입력 */

/* 새로운 값 입력시 기존 입력값은 result, subValue로 이동 */

/* 사칙연산은 기존값을 기준으로 입력값을 계산 */

/* 제곱, 제곱근은 입력값 자체를 기준으로 계산 */

/* ===== validation check ===== */
function checkInitDisplay() {
    if (displayValue.length === 1 && displayValue === "0") {
        return true;
    }

    return false;
}

/* ===== reset ===== */
function resetDisplay() {
    mainDisplay.textContent = getDisplayValue(); // 메인 화면

    if (getResetCount() === 1) {
        subDisplay.textContent = getDisplayValue(); // 서브 화면
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
    setdisplayValue(initTextValue);
    setInputNumber(initNumberValue);
    setResetCount(resetCount + 1); // 리셋 버튼 클릭 카운트 ++

    if (getResetCount() === 2) {
        setMainNegative(initNegative);
        setResult(initNumberValue);
        resetResetCount();
    }

    console.log(resetCount);
}

function resetInputNumber() {
    const initInputNumber = 0;
    inputNumber = initInputNumber;
}
