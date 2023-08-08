//for
//0~4 반복하는 반복문
for (let i = 0; i <= 4; i++) {
    console.log(i)
}
const li = document.querySelectorAll('.test li')//배열 변수 만들기
console.log(li)
for(let a=0; a<li.length; a++){//for문을 쓰면 배열이 아무리 길어도 전부 출력, length을 쓰면 인덱스 번호를 일일이쓰지 않아도 됌
    console.log(li[a])
    // 홀수 li는 노랑
    // 짝수 li는 아쿠아
    if (a%2===1) {//0123인덱스 번호,
        li[a].style.backgroundColor = 'yellow'
    }else{
        li[a].style.backgroundColor = 'aqua'
    }
}
//다중 for 바깥 한번 후 안쪽 전부 그후 바깥쪽 한번더
for(i=0; i<2; i++){//0에서 1까지 반복
    console.log(i)
    for(let j=1; j<6; j++){//1에서 5까지 반복
        console.log(`j = ${j}`)
    }
}
console.log('------------------------------------------------------')
//ul-li*3-span*2
let ulTag = document.createElement('ul')//태그 생성
let liTag = document.createElement('li')
// let spanTag = document.createElement('span')
const answer1 = document.querySelector('.answer1')
console.log(ulTag,liTag,answer1)
for(let i=1; i<=3; i++){//1단 for li*3
    liTag = document.createElement('li')
    liTag.innerHTML += `li${i}`
    for(let j=1; j<=2; j++){//2단 for span*2
        liTag.innerHTML +=`<span>span=${j}</span><br>`//span 태그 생성 및 br로 내림
    }
    ulTag.appendChild(liTag)//위에서 만든 liTag를 ulTag(ul)안에 넣는다, 여기다 넣은건 li를 하나 만들고 다시 올라가 li를 다시 또 만들게하기 위함
}
answer1.appendChild(ulTag)//위에서 만든 ulTag를 answer1(div)안에 넣는다
console.log(ulTag)
//innerHTML 작성은 가장 마지막에 속한 내용 = innerHTml or img등