const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../../../', '.env') });
// Replace 'mongodb://localhost/mydatabase' with your MongoDB connection string
// const mongoURI = 'mongodb://localhost/gallary-app-db';
const mongoURI = process.env.MONGO_URI
// || 'mongodb+srv://admin:Password123@cluster0.wzoa2yt.mongodb.net/gallary-app-db';
//mongodb+srv://admin:<password>@cluster0.wzoa2yt.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

module.exports = db;
