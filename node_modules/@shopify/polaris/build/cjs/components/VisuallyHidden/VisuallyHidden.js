'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var VisuallyHidden$1 = require('./VisuallyHidden.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * @deprecated The VisuallyHidden component will be removed in the next
 * major version. Use the Text component instead. See the
 * Polaris component guide on how to use Text.
 *
 * https://polaris.shopify.com/components/text
 */
function VisuallyHidden({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: VisuallyHidden$1["default"].VisuallyHidden
  }, children);
}

exports.VisuallyHidden = VisuallyHidden;
