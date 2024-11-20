// const http = require("http");

const express = require("express");

const server = express();

let name = "Lord";
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

let students = [
  { id: 1, name: "john doe1", dob: "200-1-10", email: "john1@gmail.com" },
  { id: 2, name: "john doe2", dob: "200-2-10", email: "john2@gmail.com" },
  { id: 3, name: "john doe3", dob: "200-3-10", email: "john3@gmail.com" },
  { id: 4, name: "john doe4", dob: "200-4-10", email: "john4@gmail.com" },
];

// all students
server.get("/api/students", (request, response) => {
  response.json(students);
});

// get student by id
server.get("/api/student/:id", (request, response) => {
  // response.json(students);
  // const studentId = request.params.id;
  const studentId = Number(request.params.id);

  // console.log(studentId);

  const student = students.find((student) => student.id === studentId);
  const checkIndex = students.findIndex((student) => student.id === studentId);

  if (!student) {
    response.json({ message: `student with id ${studentId} does not exist` });
  } else {
    response.json(student);
    console.log(checkIndex);
  }
  // response.json(student);
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
