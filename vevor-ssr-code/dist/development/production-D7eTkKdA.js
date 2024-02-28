'use strict';

var register = require('./register-BjuJr6CM.js');
var index = require('./index-DXmmW9-4.js');
require('path');
require('fs');
require('react');
require('stream');
require('util');
require('url');
require('http');
require('https');
require('assert');
require('tty');
require('os');
require('zlib');
require('querystring');

var production = ( /*#__PURE__*/(function () {
  var _ref = register._asyncToGenerator( /*#__PURE__*/register._regeneratorRuntime.mark(function _callee(app) {
    return register._regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return new Promise(function (resolve) {
            app.get('/api/userInfo', function (req, res) {
              res.send({
                ok: 200,
                message: 'this is success'
              });
            });
            var proxyMiddleware = index.dist.createProxyMiddleware({
              target: "http://localhost:3002",
              changeOrigin: true,
              ws: true,
              logLevel: 'error'
            });
            app.use('/*.css', proxyMiddleware);
            app.use('/*.js', proxyMiddleware);
            console.log('=================111resolve');
            resolve(null);
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

exports.default = production;
