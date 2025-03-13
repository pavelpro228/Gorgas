const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,  
    password: String
},{ versionKey: false })

const itemModel = mongoose.model("Users", itemSchema);
module.exports = itemModel