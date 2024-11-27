const Sequelize = require("sequelize");
const db = require("../database");

const Class = db.define("classes", {
  class_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  semester: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  schedule: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

// Associations
// Class.associate = (models) => {
//   // Many Classes belong to one Instructor
//   Class.belongsTo(models.Instructor, {
//     foreignKey: "instructor_id",
//     as: "instructor", // Alias for the relationship
//   });

//   // Many Classes belong to one Course
//   Class.belongsTo(models.Course, {
//     foreignKey: "course_id",
//     as: "course", // Alias for the relationship
//   });
// };

module.exports = Class;
