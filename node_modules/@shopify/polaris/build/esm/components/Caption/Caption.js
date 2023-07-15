import React from 'react';
import styles from './Caption.scss.js';

/**
 * @deprecated The Caption component will be removed in the next
 * major version. Use the Text component instead. See the
 * Polaris component guide on how to use Text.
 *
 * https://polaris.shopify.com/components/text
 */
function Caption({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: styles.Caption
  }, children);
}

export { Caption };
