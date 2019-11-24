const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const collections = require("./routes/collections");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const connectDb = require("./util/database");

// Database connection
connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routes
app.use("/api/v1/collections", collections);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
