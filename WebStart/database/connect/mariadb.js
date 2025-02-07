const mariadb = require("mysql");

const conn = mariadb.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root", // 여기까지가 데이터 베이스 접속하는 방법
  database: "Tennis", // 방 이름 선택
});

module.exports = conn;
