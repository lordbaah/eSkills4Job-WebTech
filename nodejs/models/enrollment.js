const Sequelize = require("sequelize");

// Import database connection
const db = require("../database");

// Define the enrollment model
const Enrollment = db.define("enrollment", {
  enrollment_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  enrollment_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

// Associate the enrollment model with the Student model
Enrollment.associate = (models) => {
  // one-to-many relationship with student
  Enrollment.belongsTo(models.Student, {
    foreignKey: "student_id",
    As: "students",
  });

  // one-to-many relationship with courses
  Enrollment.belongsTo(models.Course, {
    foreignKey: "course_id",
    As: "courses",
  });
};

module.exports = Enrollment;
