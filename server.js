// app.js
const express = require('express');
const path = require('path');
const db = require('./src/database')
const cors = require('cors')
const app = express();

app.use(cors())
// Serve static files from the 'public' directory
app.use('/home', express.static(path.join(__dirname, 'public')));

// API endpoint
app.use('/', require('./src/routes'))
app.get('/dashboard', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
