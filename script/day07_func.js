//함수 생성 > 호출
//함수 생성 후 호출식을 작성하지 않으면 함수 결과를 볼수 없다
//1. 생성 : function 함수명 (매개변수명){재사용함수문법}
//2. 호출 : 함수명()
function func1(str){ //접속 회원 맞춤형 인사
    console.log(`${str}님 어서오세요`)
}//생성함수 end
func1('주')
func1('스')
// ---------------------------------------------------
//함수 기능 : 리턴(return) 함수 결과 값을 외부로 반환명령
function func2(a){
    console.log(a+1)
}
func2(50)// 함수 결과값을 출력하는 메사드가 없어 출력 X
console.log(func2(50)) //함수결과를 호출암 메서드에 의해 출력O
// window.alert(func2(100))
document.write(func2(10))
//------------------------------------------------------
function func3(a,b){
    return a*b //함수내 리터는 1개만 존재
}
console.log(func3(10,20))
console.log(func3(2,3))
//----------------------------------------------
let total = 0
function func4(a){
    total = a
    return total
    total++ //return 뒤에 있는 js는 실행하지 못한다
}
console.log(func4(10))
//---------------------------------------------
console.log('---------------------------------------------')
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2//10+20 = 30
    num2 + a + b//20제거, 2+4 = 6 
    num1 += num2 //30+6 = 36
    return num1 //외부반환
}
console.log(func5(2,4))//함수호출
//--------------------------------------------------
const textInput = document.querySelectorAll('.box .text')
console.log(textInput)
textInput[0].addEventListener('focus',function(){
    bg(textInput[0], 'yellow')
})//노랑
textInput[1].addEventListener('focus',function(){
    bg(textInput[1], 'blue')
})//파랑
textInput[2].addEventListener('focus',function(){
    bg(textInput[2],'pink')
})//분홍
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정 되는 데이터
function bg(target, color){
    return target.style.backgroundColor = color
} //변수명을 더 추가해 다양한 효과를 낼수 있다
//-------------------------------------------
//관심상품, 알림설정 이미지에 마우스를 올렸을때
//off -> on 이미지변경
//마우스 나갔을때 on -> off 이미지변경 
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg)//변수 정상 확인

likeImg.addEventListener('mouseover',function(){
    console.log('over')//이벤트 정상확인
    // likeImg.src = './images/heart_on.png'
    onoff(this/* 현재대상에 적용 */, 'heart', 'on')
})
likeImg.addEventListener('mouseout',function(){
    // likeImg.src = './images/heart_off.png'
    onoff(this, 'heart', 'off')
})
ideaImg.addEventListener('mouseover',function(){
    // ideaImg.src = './images/idea_on.png'
    onoff(this, 'idea', 'on')
})
ideaImg.addEventListener('mouseout',function(){
    // ideaImg.src = './images/idea_off.png'
    onoff(this, 'idea', 'off')
})
function onoff(target,name,status){
    return target.src = `./images/${name}_${status}.png`
}