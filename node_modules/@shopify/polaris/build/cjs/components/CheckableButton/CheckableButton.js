'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var css = require('../../utilities/css.js');
var CheckableButton$1 = require('./CheckableButton.scss.js');
var Checkbox = require('../Checkbox/Checkbox.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const CheckableButton = /*#__PURE__*/React.forwardRef(function CheckableButton({
  accessibilityLabel,
  label = '',
  onToggleAll,
  selected,
  disabled,
  ariaLive
}, ref) {
  const checkBoxRef = React.useRef(null);

  function focus() {
    var _checkBoxRef$current;

    checkBoxRef === null || checkBoxRef === void 0 ? void 0 : (_checkBoxRef$current = checkBoxRef.current) === null || _checkBoxRef$current === void 0 ? void 0 : _checkBoxRef$current.focus();
  }

  React.useImperativeHandle(ref, () => {
    return {
      focus
    };
  });
  const className = css.classNames(CheckableButton$1["default"].CheckableButton);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    onClick: onToggleAll
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: CheckableButton$1["default"].Checkbox
  }, /*#__PURE__*/React__default["default"].createElement(Checkbox.Checkbox, {
    label: accessibilityLabel,
    labelHidden: true,
    checked: selected,
    disabled: disabled,
    onChange: onToggleAll,
    ref: checkBoxRef
  })), /*#__PURE__*/React__default["default"].createElement("span", {
    className: CheckableButton$1["default"].Label,
    "aria-live": ariaLive
  }, label));
});

exports.CheckableButton = CheckableButton;
