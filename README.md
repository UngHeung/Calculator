# ➕➖✖️➗

## ✨ 변수, 초기값 ✨

### 🔥 변수

-   `let result`
-   `let operator`
-   `let inputNumber`
-   `let negative`

### 🔥 초기값

-   `result` 반환값(연산중인), 속성 = `float`, 초기값 `0.0`
-   `operator` 현재 선택된 연산자, 초기값 `"+"`
-   `inputNumber` 현재 입력된 값, 화면에 표시되는 값, 속성 = `string`, 초기값 = `"0"`
-   `negative` 양수 = `true`, 음수 = `false`, 속성 = `boolean`, 초기값 = `"true"`

---

## ✨ 기본(반복) 프로세스 ✨

1. n번째 수 입력시 `inputNumber에` 저장
2. 연산자 입력 시
    - `result`, `inputNumber` 값을 `operator`에 저장된 연산자로 연산
    - 연산한 값을 `result`에 저장
    - 입력한 연산자를 `operator`에 저장

---

## ✨ 기능 ✨

### 🔥 사칙연산

-   `result` = `result` + `inputNumber`
-   `result` = `result` - `inputNumber`
-   `result` = `result` \* `inputNumber`
-   `result` = `result` / `inputNumber`

### 🔥 제곱, 제곱근

-   `inputNumber` = `Math.pow(inputNumber)`
-   `inputNumber` = `Math.sqrt(inputNumber)`

### 🔥 화면

-   화면 표시는 최대 `n`자리 까지
-   `displayNumber` = `inputNumber`
-   `displayResult` = `result`, `operator`
-   3자리마다 콤마(,) 추가, 소수점 아래로는 추가하지 않음
-   소수가 아닐 때는 정수형으로 표시
    -   `result % parseInt(result) === 0 ? 정수 : 소수`

### 🔥 네거티브

-   초기값 = `true`
-   양수 = `true`
-   음수 = `false`

### 🔥 초기화

-   누적 1회 -> `inputNumber` 초기화
-   누적 2회 -> `result`, `operator` 초기화
-   연속 초기화 시 2번까지 누적 가능
-   다른 버튼 누르면 초기화 누적 횟수 초기화
