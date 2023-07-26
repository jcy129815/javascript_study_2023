//getElement.. 방식
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents')
const boxId = document.getElementById('box')
const aTag = document.getElementsByTagName('a')
const aCl_first = document.getElementsByClassName('first')
const aCl_last = document.getElementsByClassName('last')

console.log(mainTag,hTag[0], contentsCls[0], boxId, aCl_first[0], aCl_last[0]);
console.log(aTag, aTag[0], aTag[1], aTag[2])

//querySelector.. 방식
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1')
const contentsClsQ = document.querySelector('.contents')
const boxIdQ = document.querySelector('#box')
const aTagQ = document.querySelectorAll('a')
const aTagCl_f = document.querySelector('.first') 
const aTagCl_l = document.querySelector('.last') 
//두개 이상일땐 All을 추가한다 안그러면 제일 먼저 나오는 태그만 읽는다

console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ, aTagCl_f, aTagCl_l);
console.log(aTagQ,aTagQ[0],aTagQ[1],aTagQ[2])