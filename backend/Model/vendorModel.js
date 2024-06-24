const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const VendorSchema = new mongoose.Schema({
    VID:{
        type:String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    vendorType:{
        type:String,
        require: true
    },
    company:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require: true
    },
    phoneNo:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require:true
    },
    isDelete:{
        type:String,
        default:false
    }
});

VendorSchema.methods.generateToken = async () => {
    try {
        jwt.sign(
            {
                vendorId: this.VID,
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

const Vendor = new mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;