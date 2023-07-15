'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('../Section/hooks.js');
var Box = require('../../../Box/Box.js');
var Text = require('../../../Text/Text.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Header({
  children
}) {
  const sectionId = hooks.useSection() || '';
  const content = typeof children === 'string' ? /*#__PURE__*/React__default["default"].createElement(Box.Box, {
    paddingBlockStart: "2",
    paddingInlineStart: "4",
    paddingBlockEnd: "2",
    paddingInlineEnd: "4"
  }, /*#__PURE__*/React__default["default"].createElement(Text.Text, {
    as: "span",
    variant: "headingXs",
    color: "subdued"
  }, children)) : children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "aria-hidden": true,
    id: sectionId
  }, content);
}

exports.Header = Header;
