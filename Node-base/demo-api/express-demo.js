const express = require("express");
const app = express(); //서버 담아놓았음.

app.get("/", function (req, res) {
  res.send("Hello World");
});

let book = {
  title: "Node.js를 공부해보자",
  price: 20000,
  description: "이 책 좋음",
};

app.get("/products/1", function (req, res) {
  res.json(book);
  // res.send(20000); // 안됨. 객체 써야함.
});

app.listen(3000); // 서버 셋팅 : 포트 넘버 3000으로 세팅
