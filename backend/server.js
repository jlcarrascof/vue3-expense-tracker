const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err))

// Test Route
app.get("/", (req, res) => {
  res.send("API working OK")
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running in http://localhost:${PORT}`)
})
