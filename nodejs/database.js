// const mysql2 = require("mysql2");

// const pool = mysql2.createPool({
//   host: "localhost",
//   user: "root",
//   password: "Start@123",
//   database: "school_management_system",
//   port: 3306,
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "school_management_system",
  "root",
  "Start@123",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
