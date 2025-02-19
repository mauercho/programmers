const express = require("express");
const app = express();
app.listen(3000);

const fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "strawberry" },
  { id: 4, name: "blueberry" },
];

app.get("/fruits", (req, res) => {
  res.json(fruits);
});

app.get("/fruits/:id", (req, res) => {
  let id = req.params.id;
  // let fruit = fruits[id]; // json array라
  let findFruit = fruits.find((f) => f.id === parseInt(id)); // fruits 배열 안에 있는 객체 중 id값이 params.id랑 같은 객체
  // fruits.forEach(function (fruit) {
  //   if (fruit.id === parseInt(id)) {
  //     findFruit = fruit;
  //   }
  // });
  if (findFruit) res.json(findFruit);
  else {
    // 예외를 터트린다 = http status code 실패 보냄.
    res.status(404).send("전달두신 id로 저장된 과일이 없습니다.");
  }
});
