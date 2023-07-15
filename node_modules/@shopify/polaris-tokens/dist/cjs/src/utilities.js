'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');

var _templateObject;

var BASE_FONT_SIZE = 16;
var UNIT_PX = 'px';
var UNIT_EM = 'em';
var UNIT_REM = 'rem'; // https://regex101.com/r/zvY2bu/1

var DIGIT_REGEX = new RegExp(String.raw(_templateObject || (_templateObject = _rollupPluginBabelHelpers.taggedTemplateLiteral(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"]))));
var UNIT_REGEX = new RegExp("".concat(UNIT_PX, "|").concat(UNIT_EM, "|").concat(UNIT_REM));
function getUnit() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var unit = value.match(new RegExp("".concat(DIGIT_REGEX.source, "(").concat(UNIT_REGEX.source, ")")));
  return unit && unit[1];
}
function toPx() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var unit = getUnit(value);
  if (!unit) return value;

  if (unit === UNIT_PX) {
    return value;
  }

  if (unit === UNIT_EM || unit === UNIT_REM) {
    return "".concat(parseFloat(value) * BASE_FONT_SIZE).concat(UNIT_PX);
  }
}
function toEm() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BASE_FONT_SIZE;
  var unit = getUnit(value);
  if (!unit) return value;

  if (unit === UNIT_EM) {
    return value;
  }

  if (unit === UNIT_PX) {
    return "".concat(parseFloat(value) / fontSize).concat(UNIT_EM);
  }

  if (unit === UNIT_REM) {
    return "".concat(parseFloat(value) * BASE_FONT_SIZE / fontSize).concat(UNIT_EM);
  }
}
function toRem() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var unit = getUnit(value);
  if (!unit) return value;

  if (unit === UNIT_REM) {
    return value;
  }

  if (unit === UNIT_EM) {
    return "".concat(parseFloat(value)).concat(UNIT_REM);
  }

  if (unit === UNIT_PX) {
    return "".concat(parseFloat(value) / BASE_FONT_SIZE).concat(UNIT_REM);
  }
}
function rem(value) {
  return value.replace(new RegExp("".concat(DIGIT_REGEX.source, "(").concat(UNIT_PX, ")"), 'g'), function (px) {
    var _toRem;

    return (_toRem = toRem(px)) !== null && _toRem !== void 0 ? _toRem : px;
  });
}
function tokensToRems(tokenGroup) {
  return Object.fromEntries(Object.entries(tokenGroup).map(function (_ref) {
    var _ref2 = _rollupPluginBabelHelpers.slicedToArray(_ref, 2),
        token = _ref2[0],
        properties = _ref2[1];

    return [token, _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, properties), {}, {
      value: rem(properties.value)
    })];
  }) // We loose the `tokenGroup` inference after transforming the object with
  // `Object.fromEntries()` and `Object.entries()`. Thus, we cast the result
  // back to `T` since we are simply converting the `value` from px to rem.
  );
}
function createVar(token) {
  return "--p-".concat(token);
}
/**
 * Allowed Polaris keyframes.
 *
 * Result: ['p-keyframes-fade-in', 'p-keyframes-spin', etc...]
 */

function getKeyframeNames(motionTokenGroup) {
  return Object.keys(motionTokenGroup).map(function (token) {
    return token.startsWith('keyframes') ? "p-".concat(token) : null;
  }).filter(Boolean);
}
/**
 * Allowed Polaris token custom properties.
 *
 * Result: ['--p-background', '--p-text', etc...]
 */

function getCustomPropertyNames(tokens) {
  return Object.entries(tokens).map(function (_ref3) {
    var _ref4 = _rollupPluginBabelHelpers.slicedToArray(_ref3, 2);
        _ref4[0];
        var tokenGroup = _ref4[1];

    return Object.keys(tokenGroup).map(function (token) {
      return createVar(token);
    });
  }).flat();
}
function removeMetadata(tokenGroup) {
  return Object.fromEntries(Object.entries(tokenGroup).map(function (entry) {
    var _ref5 = entry,
        _ref6 = _rollupPluginBabelHelpers.slicedToArray(_ref5, 2),
        tokenName = _ref6[0],
        value = _ref6[1].value;

    return [tokenName, value];
  }));
}
function getMediaConditions(breakpoints) {
  var breakpointEntries = Object.entries(breakpoints);
  var lastBreakpointIndex = breakpointEntries.length - 1;
  return Object.fromEntries(breakpointEntries.map(function (entry, index) {
    var _ref7 = entry,
        _ref8 = _rollupPluginBabelHelpers.slicedToArray(_ref7, 2),
        breakpointsTokenName = _ref8[0],
        breakpoint = _ref8[1];

    var upMediaCondition = getUpMediaCondition(breakpoint);
    var downMediaCondition = getDownMediaCondition(breakpoint);
    var onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : "".concat(upMediaCondition, " and ").concat(getDownMediaCondition(breakpointEntries[index + 1][1]));
    return [breakpointsTokenName, {
      // Media condition for the current breakpoint and up
      up: upMediaCondition,
      // Media condition for current breakpoint and down
      down: downMediaCondition,
      // Media condition for only the current breakpoint
      only: onlyMediaCondition
    }];
  }));
}

function getUpMediaCondition(breakpoint) {
  return "(min-width: ".concat(toEm(breakpoint), ")");
}
/**
 * Down media condition breakpoints are being subtracted by 0.04px to prevent
 * them from overwriting up media queries. We experimented with multiple offsets
 * and felt that 0.04px would be the safest across different pixel densities,
 * while being representable in ems with 4 decimal places of precision.
 */


function getDownMediaCondition(breakpoint) {
  var _toPx;

  var offsetBreakpoint = parseFloat((_toPx = toPx(breakpoint)) !== null && _toPx !== void 0 ? _toPx : '') - 0.04;
  return "(max-width: ".concat(toEm("".concat(offsetBreakpoint, "px")), ")");
}

function isKeyOf(obj, key) {
  return Object.keys(obj).includes(key);
}

exports.createVar = createVar;
exports.getCustomPropertyNames = getCustomPropertyNames;
exports.getKeyframeNames = getKeyframeNames;
exports.getMediaConditions = getMediaConditions;
exports.getUnit = getUnit;
exports.isKeyOf = isKeyOf;
exports.rem = rem;
exports.removeMetadata = removeMetadata;
exports.toEm = toEm;
exports.toPx = toPx;
exports.toRem = toRem;
exports.tokensToRems = tokensToRems;
