const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://cozy-biscochitos-521ecc.netlify.app"
  ]
}));


const userRoutes = require("./routes/user.routes");
const authMiddleware = require("./middleware/auth.middleware");
const taskRoutes = require("./routes/task.routes");



app.use(express.json());

app.use("/api/tasks",taskRoutes)
app.use("/api/users", userRoutes);


// protected route
app.get("/api/protected", authMiddleware, (req, res) => {

    res.json({
        message: "You accessed protected route",
        userId: req.userId
    });

});


app.get("/", (req, res) => {
    res.send("Task Manager API running");
});


module.exports = app;
