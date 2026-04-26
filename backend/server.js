const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API is running...");
});

// COURSES API
app.get("/api/courses", (req, res) => {
  res.json([
    { title: "Data Structures", category: "CS", level: "Intermediate" },
    { title: "Algorithms", category: "CS", level: "Advanced" },
    { title: "Operating Systems", category: "CS", level: "Intermediate" },
    { title: "Database Systems", category: "CS", level: "Beginner" },
    { title: "Computer Networks", category: "CS", level: "Intermediate" },

    { title: "Machine Learning", category: "AI", level: "Advanced" },
    { title: "Artificial Intelligence", category: "AI", level: "Advanced" },

    { title: "Digital Electronics", category: "ECE", level: "Intermediate" },
    { title: "Microprocessors", category: "ECE", level: "Advanced" },

    { title: "Thermodynamics", category: "Mechanical", level: "Beginner" },
    { title: "Fluid Mechanics", category: "Mechanical", level: "Intermediate" },

    { title: "Structural Engineering", category: "Civil", level: "Advanced" },
    { title: "Geotechnical Engineering", category: "Civil", level: "Intermediate" },

    { title: "Web Development", category: "IT", level: "Beginner" },
    { title: "Cloud Computing", category: "IT", level: "Advanced" }
  ]);
});

// PORT
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});