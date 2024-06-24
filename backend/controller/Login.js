const Vendor = require('../Model/vendorModel');
const Bcrypt = require('bcryptjs');

const Login = async (req, res) => {
    const { email, password } = req.body;

    if( email == 'admin@gmail.com' && password == '123456'){
        res
        .status(200)
        .json({
            isError: false,
            msg: ' Admin Login Successfull',
            isAdmin: true
        })
    }

    const vendorExists = await Vendor.findOne( { email } );
    const comparePassword = await Bcrypt.compare(password, vendorExists);

    if(!vendorExists){
        res
        .status(404)
        .json({
            isError: true,
            msg: 'Vendor Does Not Exists.',
        })
    }

    if(comparePassword){
        res.status(200).json({
            isError: false,
            msg: 'Login Successfull.',
            token: await vendorExists.generateToken(),
            vendorId: vendorExists.VID
        })
    }
    
}

module.exports = Login;