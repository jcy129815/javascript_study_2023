//배열과 객체
const a = 1 //상수(변하지 않는 값)
//a = 2 // error (상수값을 변경할 때 에러 발생)
let b = 2 // 변수 (변할수 있는 값)
b += 4 // 기존의 값에 4를 +한다
console.log(b)

//연관된 데이터 2개 이상을 배열로 담을 수 있다
const yoil = ['일','월','화','수','목','금','토']
console.log(yoil)
console.log(`오늘은 ${yoil[1]}요일입니다`)// 오늘은 월요일입니다

const colorArray = ['whit','black','red','gray','green']
const weatherArray = ['흐림','맑음','비','눈','태풍']
const color = document.querySelector('.color')
const weather = document.querySelector('.weather')
console.log(color,weather)
color.innerHTML = colorArray[3] 
weather.innerHTML = weatherArray[0]

let optionArray = new Array(4) //빈 배열 4자리 생성
console.log(optionArray)
optionArray[0] = 'white' //배열채우기
optionArray[1] = 'M'
console.log(optionArray)