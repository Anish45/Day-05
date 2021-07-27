const mongoose = require('mongoose');
//const { stringify } = require('querystring');

const PostSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    address: String
});

module.exports = mongoose.model('Post', PostSchema);