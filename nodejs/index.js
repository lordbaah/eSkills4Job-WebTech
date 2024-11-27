// const http = require("http");

const express = require("express");

// accssing routes from studentsRoutes.js
const studentsRoutes = require("./routes/studentsRoutes");
const db = require("./database");

const sequelize = require("./database");

// Import your model
const Student = require("./models/students");
const Department = require("./models/department");
const Course = require("./models/courses");
const Enrollment = require("./models/enrollment");

// creating database with sequilize
sequelize
  .sync()
  // .sync({ force: true })
  // .sync({ alter: true }) // Alters the table to match the new model
  .then(() => {
    console.log("Tables recreated successfully.");
    // return Student.create({
    //   studentName: "John Doe",
    //   dob: "2000-01-01",
    // });
  })
  // .then((student) => {
  //   console.log("Sample student created:", student);
  // })
  .catch((error) => {
    console.error("Error:", error);
  });

// setting association
const models = {
  Student,
  Course,
  Department,
  Enrollment,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;

const server = express();

let port = 8000;

// body parser middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/api/v1", studentsRoutes);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// db.execute("SELECT * FROM student")
//   .then((result) => {
//     console.log(result);
//   })
//   .then((error) => {
//     console.log(error);
//   });

// Test database connection
// db.authenticate()
//   .then(() => {
//     console.log("Database connected successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });

// // Execute a raw SQL query using Sequelize
// db.query("SELECT * FROM students", { type: db.QueryTypes.SELECT })
//   .then((students) => {
//     console.log("Query result:", students);
//   })
//   .catch((error) => {
//     console.error("Query error:", error);
//   });

//authenticating database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Database connected successfully.");
//     return sequelize.sync({ force: true }); // Force recreates all tables
//   })
//   .then(() => {
//     console.log("Tables recreated successfully.");
//   })
//   .catch((error) => {
//     console.error("Error setting up database:", error);
//   });
