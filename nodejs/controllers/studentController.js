const Students = require("../models/students");

class StudentController {
  // Create new student
  static async createStudent(request, response) {
    try {
      const { firstName, lastName, dob, email } = request.body;

      // validate all fields
      if (firstName === "" && lastName === "" && dob === "" && email === "") {
        response.status(400).json({ message: "All fields are required" });
      }

      // Create new student
      const newStudent = await Students.create({
        firstName,
        lastName,
        dob,
        email,
      });

      // Send success response
      return response.status(201).json({
        message: "Student created successfully",
        student: newStudent,
      });
    } catch (error) {
      console.log("error creating students", error);
      response.status(500).json({ message: "internal server error." });
    }
  }

  // get all students
  static async getAllStudents(request, response) {
    try {
      const students = await Students.findAll(); // Sequelize method to find all students
      response.status(200).json(students);
    } catch (error) {
      console.log("error fecthing students", error);
      response.status(500).json({ message: "internal error" });
    }
  }

  // get student by id
  static async getStudentById(request, response) {
    const studentId = parseInt(request.params.id);

    try {
      const student = await Students.findByPk(studentId); // Sequelize method to find a student by primary key

      if (!student) {
        response
          .status(404)
          .json({ message: `Student with ID ${studentId} not found.` });
      } else {
        response.status(200).json(student);
      }
    } catch (error) {
      console.error("Error fetching student by ID:", error);
      response.status(500).json({ message: "internal error" });
    }
  }

  // update student records
  static async updateStudent(request, response) {
    const studentId = parseInt(request.params.id);
    const { firstName, lastName, dob, email } = request.body;

    try {
      const student = await Students.findByPk(studentId); // Sequelize method to find a student by primary key

      if (!student) {
        response
          .status(404)
          .json({ message: `Student with ID ${studentId} not found.` });
      } else {
        // update student details
        (student.firstName = firstName),
          (student.lastName = lastName),
          (student.dob = dob),
          (student.email = email);

        await student.save();

        // Send the updated student as a response
        return response.status(200).json({
          message: "Student updated successfully",
          student,
        });
      }
    } catch (error) {
      //  console.error("Error fetching student by ID:", error);
      response.status(500).json({ message: "internal error" });
    }
  }
}

module.exports = StudentController;
