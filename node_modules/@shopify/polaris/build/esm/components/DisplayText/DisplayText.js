import React from 'react';
import { classNames, variationName } from '../../utilities/css.js';
import styles from './DisplayText.scss.js';

/**
 * @deprecated The DisplayText component will be removed in the next
 * major version. Use the Text component instead. See the
 * Polaris component guide on how to use Text.
 *
 * https://polaris.shopify.com/components/text
 */
function DisplayText({
  element: Element = 'p',
  children,
  size = 'medium'
}) {
  const className = classNames(styles.DisplayText, size && styles[variationName('size', size)]);
  return /*#__PURE__*/React.createElement(Element, {
    className: className
  }, children);
}

export { DisplayText };
