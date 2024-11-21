const express = require("express");

const router = express.Router();

let students = [
  { id: 1, name: "john doe1", dob: "200-1-10", email: "john1@gmail.com" },
  { id: 2, name: "john doe2", dob: "200-2-10", email: "john2@gmail.com" },
  { id: 3, name: "john doe3", dob: "200-3-10", email: "john3@gmail.com" },
  { id: 4, name: "john doe4", dob: "200-4-10", email: "john4@gmail.com" },
];

// get all students in the database
router.get("/students", (request, response) => {
  response.json(students);
});

// get student by id
router.get("/student/:id", (request, response) => {
  const studentId = Number(request.params.id);

  const student = students.find((student) => student.id === studentId);
  const checkIndex = students.findIndex((student) => student.id === studentId);

  if (!student) {
    response.json({ message: `student with id ${studentId} does not exist` });
  } else {
    response.json(student);
    // console.log(checkIndex);
    console.log(`${student.name} have an index of ${checkIndex}`);
  }
});

// adding new student to the students arrray
router.post("/create-student/", (request, response) => {
  const student = request.body;
  console.log(student);
  students.push(student);
  response.json(student);
});

module.exports = router;
