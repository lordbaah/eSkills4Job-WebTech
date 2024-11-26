const Students = require("../models/students");

class StudentController {
  // Create new student
  static async createStudent(request, response) {
    try {
      const { firstName, lastName, dob, email } = request.body;

      // validate all fields
      if (firstName === "" && lastName === "" && dob === "" && email === "") {
        return response
          .status(400)
          .json({ message: "All fields are required" });
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
}

module.exports = StudentController;
