//함수 = 재사용문법
//DOM.addEventListener('이벤트',function(){실행결과})
//기본 문법
//function 함수명(){재사용문법}
//자판기 함수 : 무조건 콜라 1개가 나오는 자판기
//함수는 생성, 호출을 개별로 진행해야 한다
function japangi(){//생성
    console.log('콜라 한개가 나왔습니다')
}
japangi()//호출(생성된 함수명 작성)
//버튼을 누르면 출력
const orderBtn = document.querySelector('#order')
console.log(orderBtn)
//DOM 이벤트로 함수 호출시 함수명만 작성한다 ()는 안써야 한다
// orderBtn.addEventListener('click',japangi)
orderBtn.addEventListener('click',function(){
    console.log('1000원 입금')
    japangi()
})
//함수의 매개변수
//함수 = 재사용되는 js문법을 감싸서 쉽게 호출하는 기능
//매개변수 = 재사용 함수 내에 변경되는 데이터가 있을 경우
//매개변수 활용한 함수 기본문법
//function 생성함수명(생성매개변수명){재사용문법}
function japangi2(drink){//생성
    console.log(drink+'1개 나왔습니다')
}
//매개변수가 있는 함수를 호출 할 경우
//호출 함수 괄호 안에는 매개변수에 삽입할 데이터를 작성
japangi2('사이다')
japangi2('콜라')
//사이다 하나 콜라 둘 사이다 셋 나왔습니다
//function 함수명(매개변수,매개변수){}
function japangi3(drinks,number){
    console.log(drinks + number +'개 나왔습니다')
}
japangi3('사이다','1')
japangi3('콜라','2')
japangi3('사이다','3')
//-------------------------------------------------------
//4주 자유적금
//초기금액 = 10,000원
//함수 호출 메시지 >> ?원 입금 했습니다. 총 잔액은 ?원입니다
let passBook = 10000
function week4assbook(money) {
    //passBook += money 일회성이 아니라 지속 적으로 커져야 해서이다
    console.log(`${money}원 입금 했습니다 총 잔액은${passBook+=money}원입니다`)
}
//출력예) 1000원 입급했습니다 총 잔액은 11000원입니다
week4assbook(1000)
week4assbook(1000)
//---------------------------------------------
//구구단 2~9단까지
function dan99(first){
    console.log(`${first}x1=${first*1}`)
    console.log(`${first}x2=${first*2}`)
    console.log(`${first}x3=${first*3}`)
    console.log(`${first}x4=${first*4}`)
    console.log(`${first}x5=${first*5}`)
    console.log(`${first}x6=${first*6}`)
    console.log(`${first}x7=${first*7}`)
    console.log(`${first}x8=${first*8}`)
    console.log(`${first}x9=${first*9}`)
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)