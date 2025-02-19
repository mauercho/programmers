const arr = [1, 2, 3, 4, 5];

// 콜백함수가 하는 일?
// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음 불리는 콜백함수
arr.forEach(function (a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
});

let map = new Map();
map.set(7, "seven");
map.set(9, "nine");
map.set(8, "eight");

map.forEach((value, key, c) => {
  console.log(`value: ${value} key: ${key} c: ${c}`);
});
