var jwt = require("jsonwebtoken"); // jwt 모듈 소환
var dotenv = require("dotenv");

dotenv.config(); // 이걸 사용할 거다.
// 서명 = 토큰 발행

var token = jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY);
// token 생성 = jwt 서명을 했다! (페이로드, 나만의 암호키"shhhhh") + SHA 256

console.log(token);

// 검증
// 만약 검증에 성공하면 페이로드 값을 확인할 수 있음.
var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded);
