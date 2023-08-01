const dan2Btn = document.querySelector('#dan2')
const dan3Btn = document.querySelector('#dan3')
const dan4Btn = document.querySelector('#dan4')
const dan5Btn = document.querySelector('#dan5')
let pTag = document.createElement('p')//구구단 출력 담기는 DOM객체
const dan99Wrap = document.querySelector('#dan99Wrap')//p태그 삽입 객체
console.log(dan2Btn,dan3Btn,dan4Btn,dan5Btn,dan99Wrap)
console.log(pTag)
//pTag.innerHTML = '2x1=2'
// dan99Wrap.appendChild (pTag)
function dan99(first){
    pTag.innerHTML = `${first}x1=${first*1}<br>`
    pTag.innerHTML += `${first}x2=${first*2}<br> `
    pTag.innerHTML += `${first}x3=${first*3}<br> `
    pTag.innerHTML += `${first}x4=${first*4}<br> ` 
    pTag.innerHTML += `${first}x5=${first*5}<br> `
    pTag.innerHTML += `${first}x6=${first*6}<br> `
    pTag.innerHTML += `${first}x7=${first*7}<br> `
    pTag.innerHTML += `${first}x8=${first*8}<br> `
    pTag.innerHTML += `${first}x9=${first*9}<hr>`
    dan99Wrap.appendChild(pTag)//얘 안에 p태그가 들어오게 한다라는 뜻
}
dan2Btn.addEventListener('click',function(){
    dan99(2)
})
dan3Btn.addEventListener('click',function(){
    dan99(3)
})
dan4Btn.addEventListener('click',function(){
    dan99(4)
})
dan5Btn.addEventListener('click',function(){
    dan99(5)
})
