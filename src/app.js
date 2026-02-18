const express = require("express");

const app = express();

const userRoutes = require("./routes/user.routes");
const authMiddleware = require("./middleware/auth.middleware");


app.use(express.json());

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
