function route(pathname, handle, response, productId) {
  if (pathname === "/favicon.ico") {
    response.writeHead(204);
    response.end();
    return;
  }
  if (typeof handle[pathname] == "function") {
    handle[pathname](response, productId);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("Not Found");
    response.end();
  }
  console.log("pathname : " + pathname);
}

exports.route = route;
