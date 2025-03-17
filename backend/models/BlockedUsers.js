const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,  
    password: String,
    isBanned: Boolean,
},{ versionKey: false })

const itemModel = mongoose.model("banned_users", itemSchema);
module.exports = itemModel