const Sequelize = require("sequelize");

// import db = database connection
const db = require("../database");

const department = db.define("departments", {
  department_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  department_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = department;
