const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Database Connection Successfull');
    } catch (error) {
        console.log('Database COnnection Failed!');
    }
}

module.exports = connectDB;