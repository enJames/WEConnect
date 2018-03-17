import businesses from '../models/businessData';

// Get list of all businesses
const allBusinesses = (req, res) => res.status(200).json({
    message: 'All businesses',
    businesses
});

// Get details of a business
const businessDetails = (req, res) => {
    let theBusiness;
    businesses.forEach((business) => {
        if (parseInt(req.params.businessId, 10) === business.id) {
            theBusiness = business;
        }
    });
    if (theBusiness) {
        return res.status(200).json({
            message: 'Business found',
            business: theBusiness
        });
    }
    return res.status(404).json({
        message: 'Business not found'
    });
};


// exporting
export {
    allBusinesses,
    businessDetails,
    createBusiness,
    deleteBusiness,
    updateBusiness
};
