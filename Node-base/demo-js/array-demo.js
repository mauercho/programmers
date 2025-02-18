// 자바스크립트 배열 비구조화

const array = [1, 2, 3, 4, 5];

const [, num1, num3, , num5] = array;

console.log(num1); //2
console.log(num3); //3
console.log(num5); //5
