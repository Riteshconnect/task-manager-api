const express = require("express");
const app  = express();
const userRoutes = require("./routes/user.routes")

app.use(express.json());

app.use("/api/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("Task manager Api is running")
})

module.exports = app;