// const http = require("http");

const express = require("express");

// accssing routes from studentsRoutes.js
const studentsRoutes = require("./routes/studentsRoutes");
const db = require("./database");

// db.execute("SELECT * FROM student")
//   .then((result) => {
//     console.log(result);
//   })
//   .then((error) => {
//     console.log(error);
//   });

// Test database connection
db.authenticate()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Execute a raw SQL query using Sequelize
db.query("SELECT * FROM students", { type: db.QueryTypes.SELECT })
  .then((students) => {
    console.log("Query result:", students);
  })
  .catch((error) => {
    console.error("Query error:", error);
  });

const server = express();

let port = 8000;

// body parser middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/api/v1", studentsRoutes);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
