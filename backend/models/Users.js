const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,  
    password: String,
    address: String,
    tariff: {
        name: String,
        options: String,
        price: Number,
        validUntil: String
    },
    isBanned: Boolean,
},{ versionKey: false })

const itemModel = mongoose.model("Users", itemSchema);
module.exports = itemModel