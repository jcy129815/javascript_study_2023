// day02.js
let a = 10;
let b = 1;
let c = 0;
console.log(a);//10
a = 20;
b = 2;
b = 3;
a = a+b;
c= a+b+c;
b = a+b+c; //23 3 26   52
console.log(a,b,c);//23 52 26
// ------------------------------------------
const birth = 20;
//birth = 25; //상수 값 변경 에러
console.log('--------------')
//1.다음 회원의 정보를 변수로 처리 하시오
//이름 홍길이
let name = '홍길이'
//나이 20
let age = 20
//생일 12월
const day = '12월'
//주소 인천시 부평구
let address = '인천시 부평구'
//혈액형 A형
const blood = 'A'
//위 값을 모두 변수로 개별대입 후 콘솔 출력
console.log('이름 :'+name);
console.log('나이 :'+age);
console.log('생일 :'+day);
console.log('주소 :'+address);
console.log('혈액형 :'+blood);