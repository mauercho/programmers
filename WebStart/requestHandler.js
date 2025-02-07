const mariadb = require("./database/connect/mariadb");

function main(response) {
  console.log("main");

  mariadb.query("SELECT * FROM product", function (err, rows) {
    console.log(rows);
  });

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Main Page");
  response.end();
}

function login(response) {
  console.log("login");
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Login Page");
  response.end();
}
function favicon() {
  console.log("favicon requested");
}

let handle = {}; // key: value
handle["/"] = main;
handle["/favicon.ico"] = favicon;
handle["/login"] = login;

exports.handle = handle;
