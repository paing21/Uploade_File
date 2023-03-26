const http = require("http");
const fs = require("fs");
const port = 4000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const route = req.url;
  const isRouteUrl = route === "/";
  if (isRouteUrl) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (route === "/style.css") {
    fs.readFile("style.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  } else if (route === "/script.js") {
    fs.readFile("script.js", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (route === "/fileUploade") {
    if (method == "POST") {
      const writeStream = fs.createWriteStream("img.jpg");
      req.pipe(writeStream);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "uploadeFile succes...." }));
      res.end();
    }
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("<h1>I am single</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log("I love ma ma");
});
