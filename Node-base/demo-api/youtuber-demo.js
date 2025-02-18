// express 모듈 셋팅
const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000);

// 데이터 셋팅
let youtuber1 = {
  channelTitle: "십오야",
  sub: "593만명",
  videoNum: "993개",
};

let youtuber2 = {
  channelTitle: "침착맨",
  sub: "227만명",
  videoNum: "6.6천개",
};

let youtuber3 = {
  channelTitle: "테오",
  sub: "54.8만명",
  videoNum: "726개",
};

let db = new Map();
let id = 1;
db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

// REST API 설계

app.get("/youtubers", function (req, res) {
  console.log(db);
  res.json(db);
});

app.get("/youtuber/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);
  if (youtuber === undefined) {
    res.json({
      message: "유튜버 정보를 찾을 수 없습니다.",
    });
  } else {
    res.json(db.get(id));
  }
});
app.post("/youtuber", (req, res) => {
  console.log(req.body);
  db.set(id++, req.body);
  res.json({
    message: `${db.get(id - 1).channelTitle}님, 유튜버 생활을 응원합니다!!`,
  });
});
