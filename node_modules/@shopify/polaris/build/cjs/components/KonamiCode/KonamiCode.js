'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var types = require('../../types.js');

const KONAMI_CODE = [types.Key.UpArrow, types.Key.UpArrow, types.Key.DownArrow, types.Key.DownArrow, types.Key.LeftArrow, types.Key.RightArrow, types.Key.LeftArrow, types.Key.RightArrow, types.Key.KeyB, types.Key.KeyA];
function KonamiCode({
  handler
}) {
  const keyEvent = 'keydown';
  const position = React.useRef(0);

  const handleKeyEvent = event => {
    const key = event.keyCode;
    const requiredKey = KONAMI_CODE[position.current];

    if (key === requiredKey) {
      if (position.current === KONAMI_CODE.length - 1) {
        handler(event);
        position.current = 0;
      } else {
        position.current++;
      }
    } else {
      position.current = 0;
    }
  };

  React.useEffect(() => {
    document.addEventListener(keyEvent, handleKeyEvent);
    return () => {
      document.removeEventListener(keyEvent, handleKeyEvent);
    };
  });
  return null;
}

exports.KONAMI_CODE = KONAMI_CODE;
exports.KonamiCode = KonamiCode;
