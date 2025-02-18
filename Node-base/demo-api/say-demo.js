const express = require("express");
const app = express(); //서버 담아놓았음.

app.get("/hello", function (req, res) {
  res.json({ say: "안녕하세요" });
});

app.get("/bye", function (req, res) {
  res.json({ say: "안녕히 가세요" });
});

app.listen(3000); // 서버 셋팅 : 포트 넘버 3000으로 세팅
