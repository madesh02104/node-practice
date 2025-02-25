const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("contact-me.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(data);
  });
});

app.get("*", (req, res) => {
  fs.readFile("404.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
