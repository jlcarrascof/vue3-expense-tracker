const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const router = express.Router()

// Register route
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, profileImage } = req.body

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      profileImage,
    })

    await newUser.save()

    // Generate JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    })

    res.status(201).json({ token, user: newUser })
  } catch (error) {
    res.status(500).json({ message: "Server Error", error })
  }
})

// Login route
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" })
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" })
      }

      // Generate JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      })

      res.json({ token, user })
    } catch (error) {
      res.status(500).json({ message: "Server Error", error })
    }
})

module.exports = router
