'use strict';

var React = require('react');

var DocumentContext = require('./document-context');
var Main = function Main() {
  return /*#__PURE__*/React.createElement(DocumentContext.Consumer, null, function (children) {
    return children;
  });
};

module.exports = Main;
