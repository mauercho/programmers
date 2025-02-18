const express = require("express");
const app = express();

let db = new Map(); //데이터베이스 대신 쓸거라 db라고 함.
let notebook = {
  productName: "Notebook",
  price: 2000000,
};
let cup = {
  productName: "Cup",
  price: 3000,
};
let chair = {
  productName: "Chair",
  price: 10000,
};
let poster = {
  productName: "Poster",
  price: 200000,
};
db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);
db.set(4, poster);

app.get("/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  if (db.get(id) === undefined) {
    res.json({
      message: "없는 상품입니다.",
    });
  } else {
    const product = db.get(id);
    // product.id = id;
    product["id"] = id;
    res.json(db.get(id));
  }
  // if (!db.get(id)) {
  //   res.json({
  //     message: "없는 상품입니다.",
  //   });
  // } else {
  //   res.json({
  //     id: id,
  //     productName: db.get(id),
  //   });
  // }
});

// console.log(db);
// console.log(db.get(1));
// console.log(db.get(2));
// console.log(db.get(3));

// app.get("/:id", function (req, res) {
//   let { id } = req.params;
//   id = parseInt(id);

//   if (!db.get(id)) {
//     res.json({
//       message: "없는 상품입니다.",
//     });
//   } else {
//     res.json({
//       id: id,
//       productName: db.get(id),
//     });
//   }
// });

app.listen(3000);
