import React, { Children } from 'react';
import { classNames } from '../../../../utilities/css.js';
import { wrapWithComponent } from '../../../../utilities/components.js';
import styles from '../../FormLayout.scss.js';
import { Item } from '../Item/Item.js';
import { useUniqueId } from '../../../../utilities/unique-id/hooks.js';
import { Box } from '../../../Box/Box.js';

function Group({
  children,
  condensed,
  title,
  helpText
}) {
  const className = classNames(condensed ? styles.condensed : styles.grouped);
  const id = useUniqueId('FormLayoutGroup');
  let helpTextElement = null;
  let helpTextID;
  let titleElement = null;
  let titleID;

  if (helpText) {
    helpTextID = `${id}HelpText`;
    helpTextElement = /*#__PURE__*/React.createElement(Box, {
      id: helpTextID,
      paddingBlockStart: "2",
      paddingInlineStart: "5",
      paddingBlockEnd: "0",
      paddingInlineEnd: "5",
      color: "text-subdued"
    }, helpText);
  }

  if (title) {
    titleID = `${id}Title`;
    titleElement = /*#__PURE__*/React.createElement("div", {
      id: titleID,
      className: styles.Title
    }, title);
  }

  const itemsMarkup = Children.map(children, child => wrapWithComponent(child, Item, {}));
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    className: className,
    "aria-labelledby": titleID,
    "aria-describedby": helpTextID
  }, titleElement, /*#__PURE__*/React.createElement("div", {
    className: styles.Items
  }, itemsMarkup), helpTextElement);
}

export { Group };
