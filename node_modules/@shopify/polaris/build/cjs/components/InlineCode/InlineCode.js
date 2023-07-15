'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var InlineCode$1 = require('./InlineCode.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const InlineCode = ({
  children
}) => /*#__PURE__*/React__default["default"].createElement("code", {
  className: InlineCode$1["default"].Code
}, children);

exports.InlineCode = InlineCode;
