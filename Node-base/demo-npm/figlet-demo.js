var figlet = require("figlet"); // figlet 모듈을 가져와라. require 자체는 내장 모듈임.

figlet("MinWu!!", function (err, data) {
  // 두번째 매개변수로 함수가 들어감. 콜백함수 == 함수의 매개변수로 함수가 전달함.
  // 첫번째 아스키 아트 만든 다음에 두번째 매개변수 function 함수를 실행
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
