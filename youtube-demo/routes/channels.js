const express = require("express");
const router = express.Router();
const conn = require("../mariadb");
router.use(express.json());

let db = new Map();
let id = 1;

router
  .route("/")
  .get((req, res) => {
    let { userId } = req.body;

    let sql = `SELECT * FROM channels WHERE user_id = ?`;
    if (userId) {
      conn.query(sql, userId, function (err, results) {
        if (results.length) res.status(200).json(results);
        else notFoundChannel(res);
      });
    } else {
      res.status(400).end();
    }
  })
  .post((req, res) => {
    const { name, userId } = req.body;
    if (name && userId) {
      let values = [name, userId];
      let sql = "INSERT INTO channels (name, user_id) VALUES (?, ?)";
      conn.query(sql, values, function (err, results) {
        res.status(201).json(results);
      });
    } else {
      res.status(400).json({ message: "요청 값을 제대로 보내주세요." });
    }
  });

router
  .route("/:id")
  .get((req, res) => {
    let { id } = req.params;
    let sql = `SELECT * FROM channels WHERE id = ?`;
    conn.query(sql, id, function (err, results) {
      if (results.length) res.status(200).json(results);
      else notFoundChannel(res);
    });
  })
  .put((req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    let channel = db.get(id);
    let oldTitle = channel.channelTitle;
    if (channel) {
      let newTitle = req.body.channelTitle;

      channel.channelTitle = newTitle;
      db.set(id, channel);
      res.json({
        message: `채널명이 정상적으로 수정되었습니다. 기존 ${oldTitle} -> 수정 ${newTitle}`,
      });
    } else {
      notFoundChannel();
    }
  })
  .delete((req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    let channel = db.get(id);
    if (channel) {
      db.delete(id);
      res.status(200).json({
        message: `${channel.channelTitle}이 정상적으로 삭제되었습니다.`,
      });
    } else {
      notFoundChannel();
    }
  });

function notFoundChannel(res) {
  res.status(404).json({
    message: "채널 정보를 찾을 수 없습니다.",
  });
}

module.exports = router;
