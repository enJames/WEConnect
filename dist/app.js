'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /* jshint esversion: 6 */


app.get('/', function (req, res) {
    res.send('./template/pages/index.html');
});

app.listen(1447, function () {
    console.log('Now listening on 1447');
});