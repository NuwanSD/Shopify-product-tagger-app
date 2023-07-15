import React from 'react';
import styles from './VisuallyHidden.scss.js';

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
  return /*#__PURE__*/React.createElement("span", {
    className: styles.VisuallyHidden
  }, children);
}

export { VisuallyHidden };
