// dom == document object model
//자바스크립트 = 객체지향언어
//bom = browser object model 웹브라우저 기본 객체
let hello = 'hello js';
// window.alert(hello);
// let qa = window.prompt('1+1?');
// 변수 값을 입력 할 수있다 1+1?창이 뜨고
// 사용자가 값을 입력하면 qa에 값이 대입된다
// window.alert('정답은'+qa+'입니다')
// let ox = window.confirm('자바스크립트는 객체지향 언어가 아니다');
//확인 = true(참), 취소 = false(거짓)
// window.alert(ox);

//객체.속성
//객체.메서드()
//객체.속성.메서드()

//아이디 객체 변수 대입하기
//변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1');
//  변수명 대입연산자 가져온다 저 아이디를 
console.log(btn1);
btn1.style.color = 'red';
const loginbtn = document.getElementById('login');
const paybtn = document.getElementById('pay');
let price = document.getElementById('price');
console.log(loginbtn,paybtn,price);

//클래스 객체 변수 생성
const li_first = document.getElementsByClassName('first');
const li_second = document.getElementsByClassName('second');
const li_last = document.getElementsByClassName('last')[0];
//elements뒤에s가 붙는 다 id와는 다르게 여러 클래스가 존재할수 있기 때문이다
console.log(li_first,li_second,li_last);
console.log(li_first[0]);

//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav')
const nav_a = document.getElementsByTagName('a');
console.log(header,h1,nav,nav_a);
console.log(nav_a[2]);

//innerHTML 속성 활용
//객체.속성 //읽기
//객체.속성 = 대입값 //수정 or 삭제
console.log(header.innerHTML) 
//undefined collection으로 설정되어있어서
console.log(header[0].innerHTML) 
//자식,자손 읽기 정확히 설정 해 놔야 함
console.log(h1[0].innerHTML)
console.log(pay.innerHTML)// 아이디는 중복이 없으니 인텍스를 사용X
console.log(li_second[0].innerHTML)

h1[0].innerHTML = '로<br>고'
nav_a[1].innerHTML = ''

nav_a[0].style.backgroundColor = 'aqua'
nav_a[0].style.border = '1px solid black' 
btn1.style.filter = 'blur(5px) grayscale(100%)'