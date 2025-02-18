const express = require("express");
const app = express(); //서버 담아놓았음.

// app.get("/products/:n", function (req, res) {
//   // : => 나한테 URL로 매개변수를 전달해줄 건가보다.
//   // req.params 여기에 받아온 모든 값을 받을거야.
//   // products/ 뒤 빈칸에 오는 값을 n이라는 변수에 담아줘.
//   console.log(typeof req.params.n);
//   res.json({
//     num: req.params["n"],
//     //num: parseInt(req.params["n"]);
//     //num: req.params.n
//   });
// });

// app.get("/:nickname", function (req, res) {
//   const param = req.params;
//   res.json({ channel: param.nickname });
// });

app.listen(3000); // 서버 셋팅 : 포트 넘버 3000으로 세팅

app.get("/watch", function (req, res) {
  const { v, t } = req.query;
  res.json({ video: v, timeline: t });
});
