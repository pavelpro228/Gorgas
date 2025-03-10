const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://buylin399pavel:qwerty123@cluster.u5hve.mongodb.net/Gorgas?retryWrites=true&w=majority&appName=Cluster'
        )
        console.log(`MongoDB Connected`);
        
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

module.exports = connectDB;