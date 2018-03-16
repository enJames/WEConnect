import businesses from '../models/businessData';

// Get list of all businesses
const allBusinesses = (req, res) => res.status(200).json({
    message: 'All businesses',
    businesses
});

// exporting
export {
    allBusinesses,
    businessDetails,
    createBusiness,
    deleteBusiness,
    updateBusiness
};
