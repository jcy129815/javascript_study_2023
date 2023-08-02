//전역변수(함수 외), 지역변수 (함수 내)
let b = 20 
let c = 30
function test(){
    let a =10
    console.log(a+b)// b 바깥에서 만든 변수는 함수 내에서도 사용 가능 
}
test()
// console.log(a) 에러 함수내에서 만든 변수를 바깥에서는 사용 불가
// console.log(a+b) 에러 함수내에서 만든 변수를 바깥에서는 사용 불가
console.log(b+c)//정상 함수 외에서 만든 변수가 사용 가능
console.log('-----------------------------------------')
//조건문 - 논리데이터 참(true), 거짓(false)
let num1 = 5
let num2 = 7
let num3 = '5'
console.log(num1 == num2) //false
console.log(num1 < num2) //true
console.log(num1 == num3) //true (데이터타입을 구분을 못함)
console.log(num1 === num3) //false (===이면 데이터타입 구분 가능)
console.log(num1 != num3) //false (데이터타입구분불가)(!= ->다르다)
console.log(num1 !== num3) //true (데이터타입구분)(!== ->데이터타입까지다르다)
console.log('-----------------')
//조건문
//if(조건식){조건식이 참일떄 실행결과} 조건식 종료
//상황1. 주말에 날씨가 좋으면 등산가자
let weather = ['비','맑음','흐림']
if(weather[1] === '맑음'){
    console.log('등산을 가자')
}
console.log('----------------------------------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true){console.log('실행1')} // O 
if(f>10){console.log('실행2')} // X
if(g<=20){console.log('실행3')} // O
if(e!==true){console.log('실행4')} // O
console.log('----------------------------------------')
//관리자만 접속할 숭 있는 페이지 기
//관리자 아이디일 경우마 접속가능(접속후 인사말)
/* const userId = window.prompt('아이디를 입력하시오')
if(userId === 'admin'){
    Window.alert('관리자님 안녕하세요')
} */
//사영자의 나이를 입력 받고 10이하면 '놀이기구 탑승 불가'
/* const userAge = window.prompt('나이를 입력하시오')
if( userAge <= 10 ){
    window.alert('10살 이하는 집에나 가라')
}
else{
    window.alert('즐거운 시간 되세요')
} */
const userPrint = window.confirm('인쇄할까요?')
if(userPrint === true){
    window.print()
}