// app.js
const express = require('express');
const path = require('path');
const db = require('./src/database')
const cors = require('cors')
const app = express();
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

app.use(cors())
console.log(path.join(__dirname, '..', 'client/public'))
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'client/public')));

// API endpoint
app.use('/', require('../server/src/routes'))


// Start the server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
