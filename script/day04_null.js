//null, undefined 데이터타입 차이
//null == 변수의 값을 삭제 할 때 사용
// ' ' == 빈 문자열은 DOM문자데이터를 삭제 할 때 사용
let a = 10
console.log(a)
//식을 초기화
a = null // 빈 값을 대입한다 (내용삭제)
console.log(a)
//--------------------------------------------------
const pwd = document.querySelector('#pwd')
const submit = document.querySelector('#submit')
const reset = document.querySelector('#reset')
console.log(pwd, submit, reset)
//사용자가 비밀번호 입력창에 비밀번호를 입력 후
//submit 버튼 클릭시 윈도우 팝업창으로 '비밀번호 변경'
//reset 버튼 클릭 시 비밀번호 입력칸 초기값 (제거)
submit.addEventListener('click',function(){
    window.alert('비밀번호 변경')
})
reset.addEventListener('click',function(){
    pwd.value = ''
    // pwd.value = null
})
// ---------------------------------------------
// underfine => 정의되지않은 상채
let b = 10
let c =
console.log(b.c)
console.log(b+c)//10+underfined
//NaN = Not a Numder 
//----------------------------------------
console.log('------------------------')
let num1 = 10;
num1++;
console.log(num1)//11
num1--;
console.log(num1)//10
console.log(++num1)
console.log(num1)
/*
출력 또는 대입 연산자와 함께 할 때
전위, 후위 연산자에 따른 결과값이 다르게 출력된다
출력 예) console.log(num1++)
콘솔 로그로 기존 num1의 값을 먼저 전송 출력 후
++ 증감연산자로 num1의 값을 나중에 1증가한다
개별예) num1--
출력, 대입 관계없이 증감연산자를 개별로 작성한 경우
전위, 후위 연산과 관계없이 무조건 1증가 또는 1감소된다
*/
let num2 = 5
let num3 = 0
console.log(`초기값 num2=${num2}, num3=${num3}`)
num3 = num2++
console.log(`num2=${num2}, num3=${num3}`)// 6,5 ++가 후발 주자여ㅇ
num3 = ++num2
console.log(`num2=${num2}, num3=${num3}`)// 7, 7 ++가 선발 주자여
console.log('----------------------------------------------------')
let number1 = 10
let number2 = 20
let result
number1--
console.log(number1) //9
number1++
console.log(number1) //10
result=number2++
console.log(result) //20
result=++number2
console.log(result) //22