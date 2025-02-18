const express = require("express");
const app = express(); //서버 담아놓았음.

app.get("/test", function (req, res) {
  res.send("TEST SUCCESS");
});

app.get("/test/1", function (req, res) {
  res.send("One!");
});

app.listen(3000); // 서버 셋팅 : 포트 넘버 3000으로 세팅
