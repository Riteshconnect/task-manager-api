const Task = require("../models/task.model");


// Create Task
const createTask = async (req, res) => {

    try {

        const { title, description } = req.body;

        const task = await Task.create({

            title,
            description,
            user: req.userId   // comes from auth middleware

        });

        res.status(201).json({
            message: "Task created successfully",
            task
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    createTask
};
