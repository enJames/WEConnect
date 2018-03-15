'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _usersData = require('../models/usersData');

var _usersData2 = _interopRequireDefault(_usersData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get list of all businesses
var allBusinesses = function allBusinesses(req, res) {
    res.send(_usersData2.default);
};

// Get details of a business
var businessDetails = function businessDetails(req, res) {
    res.send('To be implemented: List all businesses');
};

// Display create business form on GET
var createBusinessGet = function createBusinessGet(req, res) {
    res.send('To be implemented: Create business GET');
};

// Handle create business on POST
var createBusinessPost = function createBusinessPost(req, res) {
    res.send('To be implemented: Create business POST');
};

// Display delete business form on GET
var deleteBusinessGet = function deleteBusinessGet(req, res) {
    res.send('To be implemented: delete business GET');
};

// Handle delete business on POST
var deleteBusinessPost = function deleteBusinessPost(req, res) {
    res.send('To be implemented: delete business POST');
};

// Handle update business on POST
var updateBusinessPost = function updateBusinessPost(req, res) {
    res.send('To be implemented: update business POST');
};

// exporting
exports.default = {
    allBusinesses: allBusinesses,
    businessDetails: businessDetails,
    createBusinessGet: createBusinessGet,
    createBusinessPost: createBusinessPost,
    deleteBusinessGet: deleteBusinessGet,
    deleteBusinessPost: deleteBusinessPost,
    updateBusinessPost: updateBusinessPost
};