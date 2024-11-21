// const http = require("http");

const express = require("express");

// accssing routes from studentsRoutes.js
const studentsRoutes = require("./routes/studentsRoutes");

const server = express();

let port = 8000;

// const server = http.createServer((request, response) => {
//   response.write(`<h1>This is ${name} first server in Node JS</h1>`);
//   response.end();
// });

// server.get("/", (request, response) => {
//   response.send(`<h1>This is ${name} first server in Express JS Haha</h1>`);
// });

// server.get("/about", (request, response) => {
//   response.send(
//     `<h1>This is ${name} first server in Express JS and this about page</h1>`
//   );
// });

// body parser middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/api/v1", studentsRoutes);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
