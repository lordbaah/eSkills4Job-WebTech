const express = require("express");

const router = express.Router();

// importing class controller
const ClassController = require("../controllers/classController");

// add a class
router.post("/create-class/", ClassController.createClass);

// get all classes
router.get("/classes/", ClassController.getAllClasses);

// get all class by id
router.get("/class/:id", ClassController.getClassById);

// update class details
router.put("/class/:id", ClassController.updateClass);

module.exports = router;
