// const http = require("http");

const express = require("express");

const server = express();

let name = "Lord";
let port = 8000;

server.get("/", (request, response) => {
  response.send(`<h1>This is ${name} first server in Express JS Haha</h1>`);
});

// const server = http.createServer((request, response) => {
//   response.write(`<h1>This is ${name} first server in Node JS</h1>`);
//   response.end();
// });

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
