const Sequelize = require("sequelize");

// import db = database connection
const db = require("../database");

const Student = db.define("students", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  studentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});
