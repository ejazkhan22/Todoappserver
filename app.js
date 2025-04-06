const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require("./routes/TodoRoute"); // your routes

require('dotenv').config();

const app = express();

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to Mongo"))
    .catch((err) => console.log(err));

// Middleware setup
app.use(express.json()); // Ensure body parsing for POST requests
app.use(cors()); // Cross-origin requests

// Routes setup


app.use("/", routes);  // Prefixed with '/api/todos'

// Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
