const { isObjectIdOrHexString } = require('mongoose');
const Vendor = require('../Model/vendorModel');
const Bcrypt = require('bcryptjs');

// const nextVendorId = async () => {
//     const lastVendor = await Vendor.findOne().sort( { VID: -1 });
    
//     if(!lastVendor){
//         return '001'
//     }

//     const vendorId = lastVendor.VID;
//     const newVendorId = parseInt(vendorId) + 1;

//     return newVendorId;
// }

const Register = async (req, res) => {
    try {
        const { name, vendorType, company, email, phoneNo, password } = req.body;
        
        console.log(req.body);

    if(!name || !vendorType || !company || !email || !phoneNo ){
        res 
        .status(404)
        .json({
            isError: true,
            msg: 'Data Insufficient!'
        })
    }

    const vendorExists = await Vendor.findOne( { email });

    if(vendorExists){
        res 
        .status(404)
        .json({
            isError: true,
            msg: 'Vendor already exists.'
        })
    }

    if(!vendorExists){
        // const VID = nextVendorId();

        const saltRound = await Bcrypt.genSalt(10);
        const hashPassword = await Bcrypt.hash(password, saltRound);

        const vendorCreated = await Vendor.create({
            name,
            vendorType,
            company,
            email,
            phoneNo,
            password: hashPassword
        })

        if(vendorCreated){
            res
            .status(200)
            .json({
                isError: false,
                msg: 'Vendor Registration Successful',
                vendorId: vendorCreated._id.toString()
            })
        }
        
    }
    } catch (error) {
        res.status(404).json({
            isError: true,
            error
        })
    }
}

module.exports = Register;