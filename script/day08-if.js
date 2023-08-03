//조건문 if 
/* 비교연산자에 의해 출력된 논리데이터의 참(true) 거짓(false)에 
따라 다른 결과 값을 보여주는 조건문 */
//기본문법 => if(조건식){조건결과가 참일 때 실행 결과}
//1.사용자가 입력한 숫자가 짝수면 '짝수입니다' 결과출력
/* const num1 = Number(window.prompt('1~99 사이 숫자를 입력하시오'))
if(num1%2===0){
    window.alert('짝수입니다') 
} */
//2. 하루 걸음수를 입력받고 만보 이상이면 '목표달성' 출력
/* const num1 = Number(window.prompt('오늘의 걸음 수'))
if(num1 >= 10000){
    window.alert('목표달성')
} */
//----------------------------------------
//거짓일때
//기본문법 => if(조건식){조건결과가 참일 때 실행 결과}else{거짓일때}
//관리자 아이디 : admin
//접속 아이디 일치 시 '어서오세요 관리자님'
//접속 아이디 불일치 시 '접근 불가'
/* const userId = window.prompt('아이디를 입력하시오')
if(userId !== 'admin'){
    window.alert('접근불가')
}else{
    window.alert('어서오세요 관리자님')
} */
//--------------------------------------------------
//사용자가 입력한 수가 짝수 => '짝수 입니다'
//홀수면 = > 홀수 입니다
/* const num = Number(window.prompt('수를 입력하시오'))
if(num %2 === 0){
    window.alert('짝수 입니다')
}else{window.alert('홀수 입니다')} */
//---------------------------------------------
//중첩 if문 (if문 안에 if 삼입)
//관리자 id: admin / pw: a1234
/* const id = window.prompt('아이디를 입력하시오')
const pw = window.prompt('비밀번호를 입력하시오')
console.log(id,pw)
if(id === 'admin'){//1단 if
    //중첩 if 시작
    if(pw === 'a1234'){
        window.alert('어서오세요 관리자님')
    }//2단 if(1단 if가 참일 경우 읽는다)
    else{ㄴ
        window.alert('비밀번호가 틀렸습니다')
    }
    //중첩 if 종류)
}else{
    window.alert('로그인 실패, 아이디 오류')
} */
//-----------------------------------------------------
//논리연산자 &&(and) ||(or)
let a = 10
console.log(a===10) //true
console.log(a>10) //false
//비교식 논리연산 비교
console.log(a===10 || a>=10) //true && true = true
console.log(a!==10 || a===10) //false && true = true

const id = 'admin'
const pw = 'a1234'
if(id==='admin' && pw==='a1234'){
    console.log('로그인 성공')
}else{
    console.log('로그인 실패')
}

//시험 점수를 입력받고 해당 점수에 따라 A~F 학점 출력하기
//100~90 A
//A가 아니면 모두 F
const num = Number(window.prompt('시험 몇점이니?'))
if(num>=90 && num<101){
    window.alert('A학점이구나')
}else{
    window.alert('F니?')
}
