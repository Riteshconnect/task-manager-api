const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
    createTask
} = require("../controllers/task.controller");


// create task route
router.post("/", authMiddleware, createTask);


module.exports = router;
