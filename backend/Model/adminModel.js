const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.model({
    email:{
        type:String,
        default: 'admin@gmail.com'
    },
    password:{
        type: String,
        default: '123456'
    }
});

adminSchema.methods.generateToken = async () => {
    try {
        jwt.sign(
            {
                adminId: this._id,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"24h"
            }
        )
    } catch (error) {
        console.log(error);
    }
}

const Admin = new mongoose.model('Admin', adminSchema);

module.exports = Admin;