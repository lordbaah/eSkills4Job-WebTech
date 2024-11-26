const Sequelize = require("sequelize");

// import db = database connection
const db = require("../database");

const course = db.define("courses", {
  course_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  courseName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  courseDescription: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = course;
