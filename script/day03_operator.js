//자바스크립트 연산자
let a = 10;
let b = 5;
let c = 1;
console.log(`${a}+${b}=${a+b}`);
console.log(a+'+'+b+'='+(a+b));
console.log(`${a}-${c}=${a-c}`);
console.log(`${b}X${c}=${b*a}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
//연결연산자 문자가 하나라도 있다면 출력은 문자다
console.log('10'+10);//1010 여기서 +는 연결 연산자
console.log(10+10);//20 여기서 +는 산수연산자
console.log(typeof('10'+10));
console.log(typeof(10+10));
console.log('------------------------------------');
let age = 20;
// age = age+1;
//복합연산자로 바꾸면
age += 1
console.log(`${age}살`);
age-=  1;
console.log(age);
console.log('-------------------------')
//복합 대입 연산자를 이용한 태그 생성방법
let cart_li = '<ul>';//빈 장바구니(초기)
//참기름 1개 장바구니 담기
cart_li += '<li>참기름1개</li>';
//베이글 두개 장바구니 담기
cart_li += '<li>베이글2개</li>';
cart_li += '</ul>';
console.log(cart_li);
console.log('-------------------------')
//태그생성메서드 cearteElement('생성태그명') 
let cartNewLi = document.createElement('ul');
const cart_contents = document.querySelector('#cart .contents');
cartNewLi.innerHTML = '<li>참기름 1개</li>'
cartNewLi.innerHTML += '<li>베이글 2개</li>'
console.log(cartNewLi)
console.log(cart_contents);
cart_contents.appendChild(cartNewLi);