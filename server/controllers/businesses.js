import userData from '../models/usersData';

// Get list of all businesses
const allBusinesses = (req, res) => {
    res.send(userData);
};

// Get details of a business
const businessDetails = (req, res) => {
    res.send('To be implemented: List all businesses');
};

// Display create business form on GET
const createBusinessGet = (req, res) => {
    res.send('To be implemented: Create business GET');
};

// Handle create business on POST
const createBusinessPost = (req, res) => {
    res.send('To be implemented: Create business POST');
};

// Display delete business form on GET
const deleteBusinessGet = (req, res) => {
    res.send('To be implemented: delete business GET');
};

// Handle delete business on POST
const deleteBusinessPost = (req, res) => {
    res.send('To be implemented: delete business POST');
};

// Handle update business on POST
const updateBusinessPost = (req, res) => {
    res.send('To be implemented: update business POST');
};

// exporting
export default {
    allBusinesses,
    businessDetails,
    createBusinessGet,
    createBusinessPost,
    deleteBusinessGet,
    deleteBusinessPost,
    updateBusinessPost
};
