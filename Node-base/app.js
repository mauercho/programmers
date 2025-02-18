const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.post("/test", (req, res) => {
  // body에 뿔려져온 데이터를 화면에 뿌려줘볼까?
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
