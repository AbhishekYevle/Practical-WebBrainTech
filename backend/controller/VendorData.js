const Vendor = require('../Model/vendorModel');


const VendorData = async (req, res) => {
    try {
        const vendors = await Vendor.find( { isDelete: false } );
        res
        .status(200)
        .json( { vendors } );
    } catch (error) {
        res.status(404).json( { error } )
    }
}

module.exports = VendorData;