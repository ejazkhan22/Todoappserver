const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/TodoRoute'); // adjust this if needed
require('dotenv').config();

const app = express();

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Mongo error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Add a base route for testing
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Use your todo routes
app.use("/api", routes); // All todo routes are under /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
