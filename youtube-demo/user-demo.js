const express = require("express");
const app = express();
app.listen(3000);
app.use(express.json()); // http 외 모듈도 쓰겠다.

let db = new Map();
let id = 1;
// 로그인
app.post("/login", function (req, res) {
  // userId가 디비에 저장된 회원인지 확인
  const { userId, password } = req.body;
  let loginUser = {};
  db.forEach(function (user, id) {
    if (user.userId === userId) {
      loginUser = user;
    }
  });
  if (isExist(loginUser)) {
    console.log("같은 거 찾았다.");
    if (loginUser.password === password) {
      console.log("패스워드도 같다");
    } else {
      console.log("패스워드는 틀렸다.");
    }
  } else {
    console.log("입력하신 아이디는 없는 아이디입니다.");
  }
});

// 회원가입
app.post("/join", function (req, res) {
  db.set(id++, req.body);

  if (req.body.size !== 0) {
    res.status(201).json({
      message: `${db.get(id - 1).name}님 환영합니다`,
    });
  } else {
    res.status(400).json({
      message: `입력 값을 다시 확인해주세요.`,
    });
  }
});

// // 회원 개별 조회
// app.get("/users/:id", function (req, res) {
//   let { id } = req.params;
//   id = parseInt(id);
//   const user = db.get(id);
//   if (user === undefined) {
//     res.status(404).json({
//       message: "회원 정보가 없습니다.",
//     });
//   } else {
//     res.status(200).json({
//       userId: user.userId,
//       name: user.name,
//     });
//   }
// });

// // 회원 개별 탈퇴
// app.delete("/users/:id", function (req, res) {
//   let { id } = req.params;
//   id = parseInt(id);
//   const user = db.get(id);
//   if (user === undefined) {
//     res.status(404).json({
//       message: "회원 정보가 없습니다.",
//     });
//   } else {
//     db.delete(id);
//     res.status(200).json({
//       message: `${user.name}님 다음에 또 뵙겠습니다.`,
//     });
//   }
// });

app
  .route("/users/:id")
  .get(function (req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const user = db.get(id);
    if (user === undefined) {
      res.status(404).json({
        message: "회원 정보가 없습니다.",
      });
    } else {
      res.status(200).json({
        userId: user.userId,
        name: user.name,
      });
    }
  })
  .delete(function (req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const user = db.get(id);
    if (user === undefined) {
      res.status(404).json({
        message: "회원 정보가 없습니다.",
      });
    } else {
      db.delete(id);
      res.status(200).json({
        message: `${user.name}님 다음에 또 뵙겠습니다.`,
      });
    }
  });
function isExist(obj) {
  if (obj.constructor === Object) {
    if (Object.keys(obj).length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
