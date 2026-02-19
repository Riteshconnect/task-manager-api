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
// Get all tasks of logged-in user
const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find({
            user: req.userId
        });

        res.status(200).json({
            tasks
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Task
const updateTask = async (req, res) => {

    try {

        const taskId = req.params.id;

        const { title, description, completed } = req.body;

        const task = await Task.findOneAndUpdate(

            { _id: taskId, user: req.userId }, // ensures user owns task

            { title, description, completed },

            { new: true }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task updated successfully",
            task
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Task
const deleteTask = async (req, res) => {

    try {

        const taskId = req.params.id;

        const task = await Task.findOneAndDelete({

            _id: taskId,
            user: req.userId

        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};
