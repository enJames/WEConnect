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

// Register/create a business on POST
const createBusiness = (req, res) => {
    const { company, category, location } = req.body;
    const business = {
        id: (businesses.length + 1),
        company,
        category,
        location
    };
    businesses.push(business);
    return res.status(201).json({
        message: 'Business created',
        business
    });
};

// Handle update business on PUT
const updateBusiness = (req, res) => {
    const { company, category, location } = req.body;
    const updateObject = {
        company,
        category,
        location
    };
    let theBusiness;
    businesses.forEach((business) => {
        if (parseInt(req.params.businessId, 10) === business.id) {
            business = { ...business, ...updateObject };
            theBusiness = business;
        }
    });
    if (theBusiness) {
        return res.status(200).json({
            message: 'Business updated',
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
    updateBusiness,
    deleteBusiness
};
