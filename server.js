require("dotenv").config();
const express = require("express");
const connectDb = require("./util/database");

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connectDb();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
