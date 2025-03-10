const express = require('express')
const cors = require('cors')
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Test route
app.get('/api', (req, res) => {
    res.send({ message: 'API working correctly' })
});

// Init server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
