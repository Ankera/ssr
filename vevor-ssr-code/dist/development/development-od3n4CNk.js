'use strict';

var register = require('./register-Dh_qmjR1.js');
require('path');
require('fs');
require('react');
require('stream');
require('util');

var development = ( /*#__PURE__*/(function () {
  var _ref = register._asyncToGenerator( /*#__PURE__*/register._regeneratorRuntime.mark(function _callee(app) {
    return register._regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('==========');
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

exports.default = development;
