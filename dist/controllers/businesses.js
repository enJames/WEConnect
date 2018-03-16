'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateBusinessPost = exports.deleteBusinessPost = exports.deleteBusinessGet = exports.createBusinessPost = exports.createBusinessGet = exports.businessDetails = exports.allBusinesses = undefined;

var _businessData = require('../models/businessData');

var _businessData2 = _interopRequireDefault(_businessData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get list of all businesses
var allBusinesses = function allBusinesses(req, res) {
    res.json(_businessData2.default);
};

// Get details of a business
/* jshint esversion: 6 */
var businessDetails = function businessDetails(req, res) {
    var holdbusiness = void 0;
    _businessData2.default.forEach(function (business) {
        if (req.params.bussinessId === Number(business.id)) {
            holdbusiness = business;
        }
    });
    console.log(holdbusiness);
    res.send(holdbusiness);
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
exports.allBusinesses = allBusinesses;
exports.businessDetails = businessDetails;
exports.createBusinessGet = createBusinessGet;
exports.createBusinessPost = createBusinessPost;
exports.deleteBusinessGet = deleteBusinessGet;
exports.deleteBusinessPost = deleteBusinessPost;
exports.updateBusinessPost = updateBusinessPost;