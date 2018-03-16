'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _businessRoutes = require('./routes/businessRoutes');

var _businessRoutes2 = _interopRequireDefault(_businessRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
// modules import
var app = (0, _express2.default)();

app.use('/api/v1/businesses', _businessRoutes2.default);

app.listen(1447, function () {
    console.log('Now listening on 1447');
});

exports.default = app;