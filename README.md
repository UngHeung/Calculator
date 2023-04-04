# 계산기

## 기능

-   값 입력
    -   숫자, 연산자, 초기화 등을 입력하면 받아오는 기능
-   계산기능
    -   더하기, 빼기, 곱하기, 나누기, 제곱, 제곱근
-   기타기능
    -   소숫점, 양수/음수, 초기화

---

##

-   초기 값
    -   현재 계산중인 반환 값
    -   화면에 표시되는 값
    -   양수, 음수 상태 값(네거티브)

---

## 모듈

### setter

-   입력받은 값을 저장하는 기능

---

### getter

-   저장된 값을 불러오는 기능

---

## 기능

### 버튼 종류 구분 기능

-   숫자
-   연산자
-   네거티브
-   초기화
-   소수점

### 기존 값에 입력 값을 연산하는 기능

-   더하기
-   빼기
-   곱하기
-   나누기
-   제곱 `pow()`
-   제곱근 `sqrt()`

### 기존 값을 음수 혹은 양수로 변경하는 기능

---

## 유효성

### 연산자만 연속으로 누를 때

-   입력된 값이 있던 없던 다음 연산을 위한 연산자만 바뀐다.
-   0에서 나누면 0으로 나눌 수 없음을 알림

### =을 연속으로 누를

-   계산 전에는 연산자만 바뀜
-   1회 이상 계산 후에는 제일 마지막 연산을 실행

### 연산할 수를 누르지 않고 =을 누를 때

-   이전에 입력한 수가 있으면 동일한 수를 대입하여 연산

---

## 초기화

### 계산기 초기화 기능

-   1번 누르면 현재 입력값 초기화
-   2번 연속으로 누르면 계산기 초기화
