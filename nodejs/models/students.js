// import db = database connection
const db = require("../database");

const Sequelize = require("sequelize");
// const sequelize = require("../database"); // Path to your database file

const Student = db.define("student", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Ensures the value is a valid email address
    },
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Student;
