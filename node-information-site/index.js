const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  } else if (filePath === "./about") {
    filePath = "./about.html";
  } else if (filePath === "./contact-me") {
    filePath = "./contact-me.html";
  } else {
    filePath = "./404.html";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
