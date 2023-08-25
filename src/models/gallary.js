const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    data: mongoose.Schema.Types.Buffer,
    contentType: String
});

module.exports = mongoose.model('Image', imageSchema);
