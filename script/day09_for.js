<<<<<<< HEAD
//반복문 for
/*
    for(반복분변수생성; 변수활용조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반목실행
    }반목문 변수 조건이 거짓일 때 끝나는 위치
*/
//1~10까지 반복하는 반목문
//for 자주 이용하는 지역변수 = i, j, m, n, k
for(let i=0; i<11; i++){
    console.log('hello js'+(i+1))
}
//0~5
for (let j = 0; j < 6; j++) {
    console.log('으어'+j);
    
}
//5~0 점점 작아짐
for(let m=5; m>=0; m--){
    console.log(m)
}
//10~30까지 중 홀수만 반복문 안에 조건문
for(let n=10; n<=30; n++ ){
    if(n%2===1)
    console.log('에'+n)
}
//dom, 배열 사용하는 반복문
const study = ['html','css','javascript','figma','phtoshap','illustrator']
//객체의 수를 인식하는 속성 = length
//1.html 공부
//2.css 공부
//3.javascript 공부
//4.figma 공부
//5.phtoshap 공부
//6.illustrator 공부
for(let i=0; i<study.length; i++){
    //배열의 인덱스가 1부터 시작한다
    //0부터 계산해야 하기에 =뺀디
    console.log(`${i+1}.${study[i]} 공부`)
}
//--------------------------------------------------
//위 스터디 역순으로 출력
for(let i=study.length-1; i>=0; i--){
    console.log(`역순${i+1}.${study[i]} 공부`)
}
//반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')//3 2
//반복문 이용 coffee배열 모두 출력
for(let c=0; c<coffee.length; c++){
    console.log(coffee[c])
=======
//반복문 for
/*
    for(반복분변수생성; 변수활용조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반목실행
    }반목문 변수 조건이 거짓일 때 끝나는 위치
*/
//1~10까지 반복하는 반목문
//for 자주 이용하는 지역변수 = i, j, m, n, k
for(let i=0; i<11; i++){
    console.log('hello js'+(i+1))
}
//0~5
for (let j = 0; j < 6; j++) {
    console.log('으어'+j);
    
}
//5~0 점점 작아짐
for(let m=5; m>=0; m--){
    console.log(m)
}
//10~30까지 중 홀수만 반복문 안에 조건문
for(let n=10; n<=30; n++ ){
    if(n%2===1)
    console.log('에'+n)
}
//dom, 배열 사용하는 반복문
const study = ['html','css','javascript','figma','phtoshap','illustrator']
//객체의 수를 인식하는 속성 = length
//1.html 공부
//2.css 공부
//3.javascript 공부
//4.figma 공부
//5.phtoshap 공부
//6.illustrator 공부
for(let i=0; i<study.length; i++){
    //배열의 인덱스가 1부터 시작한다
    //0부터 계산해야 하기에 =뺀디
    console.log(`${i+1}.${study[i]} 공부`)
}
//--------------------------------------------------
//위 스터디 역순으로 출력
for(let i=study.length-1; i>=0; i--){
    console.log(`역순${i+1}.${study[i]} 공부`)
}
//반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')//3 2
//반복문 이용 coffee배열 모두 출력
for(let c=0; c<coffee.length; c++){
    console.log(coffee[c])
>>>>>>> 9cf67ac03334200f758a20456d46cccfb48315b7
}