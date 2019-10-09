const mongoose = require('mongoose'); 

const videoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    url: {
        type: String, 
        required: true
    }, 
    description: String
});

module.exports = mongoose.model('Video', videoSchema);