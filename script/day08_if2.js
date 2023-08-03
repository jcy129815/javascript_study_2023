//if 2단, 3단 이상 조건식을 여려개 작성하는 방법
/*
    if(조건식1){
        조건식1 참일경우
    }else if(조건식2){
        조건식1 거짓이고 조건식2 참일 경우
    }else if(조건식3){
        조건식1,조건식2 거짓이고 조건식3 참일 경우
    }else{
        모든 조건이 거짓일 경우
    }
*/
/*
    if(조건식1){참일 때 실행}
    if(조건식2){참일 때 실행}
*/
const a = 51
if(a>0 && a<11){
    console.log('a는 1~10사이 값이다')
}else if(a>10 && a<51){
    console.log('a는 11~50사이 값이다')
}else{
    console.log('a는 조건 밖 값을 가지고 있다')
}

// 경품 추천기
// 추천 번호를 받고 번호에 따른 경품 지금
//1:냉장고
//2:세탁기
//3:컴퓨터
//그외 수는 꽝
const num = Number(window.prompt('추천 번호를 적어주시오'))
if(num === 3){
    window.alert('축하드립니다 3등 경품 컴퓨터입니다')
}else if(num === 2){
    window.alert('축하드립니다 2등 경품 세탁기입니다')
}else if(num === 1){
    window.alert('축하드립니다 1등 경품 냉장고입니다')
}else{
    window.alert('아쉽군요 꽝입니다')
}