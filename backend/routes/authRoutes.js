const express = require("express");
const router = express.Router();
const User = require("../models/User");

// SIGNUP (with 10 courses)
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({
    email,
    password,
    courses: [
      { title: "React Basics", progress: 0 },
      { title: "Advanced React", progress: 0 },
      { title: "JavaScript Fundamentals", progress: 0 },
      { title: "TypeScript", progress: 0 },
      { title: "Node.js", progress: 0 },
      { title: "Express.js", progress: 0 },
      { title: "MongoDB", progress: 0 },
      { title: "HTML & CSS", progress: 0 },
      { title: "Data Structures", progress: 0 },
      { title: "System Design Basics", progress: 0 },
    ],
  });

  await newUser.save();
  res.json(newUser);
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json(user);
});

// UPDATE PROGRESS
router.post("/update-progress", async (req, res) => {
  const { email, courseTitle, progress } = req.body;

  const user = await User.findOne({ email });

  const course = user.courses.find((c) => c.title === courseTitle);

  if (course) {
    course.progress = progress;
  }

  await user.save();

  res.json(user);
});

module.exports = router;

router.post("/enroll", async (req, res) => {
  const { email, title } = req.body;

  const user = await User.findOne({ email });

  const already = user.courses.find(c => c.title === title);

  if (!already) {
    user.courses.push({ title, progress: 0 });
    await user.save();
  }

  res.json(user);
});