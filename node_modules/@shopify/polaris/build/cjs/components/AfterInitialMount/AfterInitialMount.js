'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useIsAfterInitialMount = require('../../utilities/use-is-after-initial-mount.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function AfterInitialMount({
  children,
  onMount,
  fallback = null
}) {
  const isMounted = useIsAfterInitialMount.useIsAfterInitialMount();
  const content = isMounted ? children : fallback;
  React.useEffect(() => {
    if (isMounted && onMount) {
      onMount();
    }
  }, [isMounted, onMount]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, content);
}

exports.AfterInitialMount = AfterInitialMount;
