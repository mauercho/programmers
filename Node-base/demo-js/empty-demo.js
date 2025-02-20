const obj1 = {};
const obj2 = { message: "안 빔" };
const str1 = "one";
const str2 = ""; // 문자열도 객체임!!

console.log(Object.keys(obj1).length === 0); // length === 0  -> true
console.log(Object.keys(obj2).length === 0); // length === 1  -> false
console.log(Object.keys(str1).length === 0); // -> false
console.log(Object.keys(str2).length === 0); // -> true

function isEmpty(obj) {
  if (obj.constructor === Object) {
    if (Object.keys(obj).length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
