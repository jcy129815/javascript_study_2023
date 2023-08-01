//배열과 객체
const array1 = ['html', 'css', 'js']
// 전체 배열 출력 (테스트용으로 전체 확인)
console.log(array1) 
// 개별 배열 직접출력(이벤트, 속성, 메서드 활용)
console.log(array1[0])
//DOM변수생성
const li = document.querySelectorAll('ul li')
console.log(li) //전체 정상출력 확인
console.log(li[1]) //개별출력(이벤트, 속성, 메서드 활용)
//----------------------------------------객체
//배열은 2개 이상의 데이터가 서로 연관되어 있어야 한다
//예) 쇼핑몰 옵션: 색상 / 사이즈 / 옵셥
//사이즈 = [s, m ,l]   컬러 = [r, g ,b]
//객체는 2개 이상의 데이터가 속성:값으로 이루어져 있기 때문에
//큰 분류만 같다면 다양한 속성을 하나의 객체로 취급할 수 있다
const cat1/* 객체 */ = {
    color/* 속성 */: 'black',/* 값 */ 
    age: 1
}
console.log(cat1) //전체확인
console.log(cat1.color) //객체 ,속성 개별출력
console.log(cat1.age)
//객체 내 속성값으로 배열 삽입
const cat2 = {
    color: ['white','brown','black'],
    age: 2
}
console.log(cat2)
console.log(cat2.color)
console.log(cat2.color[1])
console.log(cat2.age)
//쇼핑몰
const shap = {
    size: ['M','S','L'],
    color: ['black','white','yellow']
}
console.log(shap)
console.log(shap.size)
console.log(shap.size[2])
console.log(shap.color)
console.log(shap.color[0])