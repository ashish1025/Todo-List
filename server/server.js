// start with x : defining the end points

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const todo = require("./routes/todo");

const app = express();

// connecting to the mongodb
const connectDB = require("./config/db");
connectDB();

app.use(cors({ origin: true, credentials: true }));

// initialize the middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
    res.send("Server up and running");
});
app.use("/api/todo", todo);

// setting up the port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
