const div = document.querySelector(".div");

const students = [
  {
    name: "Musa",
    age: 12,
    grades: ["english: 100", "maths: 80", "science: 70"],
  },
];

let newStudent = {
  name: "John",
  age: 10,
  grades: ["english: 100", "maths: 80", "science: 70"],
};

students.push(newStudent);

// const listStudents = students.forEach((student, index) => {
//   console.log(`${index + 1} ${student.name} `);
//   let grades = student.grades.forEach((grade) => {
//     console.log(grade);
//   });
//   console.table(grades);
//   div.textContent = `${student.name} , ${grades}`;
// });

// Build a string to display all students and their grades
let studentInfo = "";

students.forEach((student, index) => {
  studentInfo += `${index + 1}. ${student.name}\n`;
  student.grades.forEach((grade) => {
    studentInfo += `  ${grade}\n`;
  });
});

// Set the text content of the div
div.textContent = studentInfo;
