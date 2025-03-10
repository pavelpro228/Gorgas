const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    email: String,
    password: String
})

const itemModel = mongoose.model("Users", itemSchema);
module.exports = itemModel