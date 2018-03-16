'use strict';

var _chai = require('chai');

var _app = require('../server/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
describe('App', function () {
    it('greeting should return "Test is working"', function () {
        _chai.assert.equal((0, _app2.default)(), 'Test is working');
    });
});