require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db")

connectDB();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Sevrer running on PORT ${PORT}`);
})