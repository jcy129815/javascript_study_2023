//ES6이상의 버전 for DOM 쉽게 관리할 수 있는 for ~ in ~ of ~ Each
const study = ['html','css','javascript','design']
//기본 for 문법 for(변수생성; 조건식; 증감식){실행결과}
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
//for ~in 문법(DOM index number)
for(let i in study){
    console.log(i)   // 인덱스 번호를 불러옴 //결과 0,1,2,3
}
//for ~of 문법(DOM)
for(let i of study){
    console.log(i)  // 내용물을 불러옴 //결과 html, css, javascript, design
}
const boxA = document.querySelectorAll('.box a')
for(let i in boxA){
    console.log(i)//DOM index+기본속성 출력
}
for(let i of boxA){
    console.log(i)//DOM 객체 출력
    i.addEventListener('mouseover',function(){
        console.log(this)
        i.style.backgroundColor = 'aqua'
    })//mouseover end
    i.addEventListener('mouseout',function(){
        i.style.backgroundColor = 'green'
        i.style.color = 'white'
    })//mouseout end
    i.addEventListener('click',function(){
        window.alert('준비중입니다')
    })//click end
}//for of boxA end
console.log('---------------------------------------------------------')

//fpr ~in 인덱스 위주 제어
//for ~of 객체 위주 제어
//forEach 인덱스, 객체, 배열 동시데어
const num = [20,21,22,23,24,25]
/*
객체.forEach(function(객체매개변수, 인덱스매개변수, 배열매개변수)){}

/* 
매개변수명은 의미 맞게 자우롭게설정 가능
매개변수 순서에 따라 객체,인덱스,배열 지정이나 순서
매개변수 필요한 대상만 작성 간ㅇ
*/
// num.forEach(function(t, i, array){})
// num.forEach(function(dom, in, ar){})
num.forEach(function(target, index, array){
    console.log(`target=${target}`)
    console.log(`index=${index}`)
    console.log(`array=${array}`)
    console.log(`---------------------------`)
    target.addEventListener('mousedown',function(){
        target.style.color='red'
    })
})


