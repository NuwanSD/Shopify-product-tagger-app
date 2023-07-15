import React from 'react';
import type { HeadingTagName } from '../../types';
declare type Size = 'small' | 'medium' | 'large' | 'extraLarge';
export interface DisplayTextProps {
    /**
     * Name of element to use for text
     * @default 'p'
     */
    element?: HeadingTagName;
    /**
     * Size of the text
     * @default 'medium'
     */
    size?: Size;
    /** Content to display */
    children?: React.ReactNode;
}
/**
 * @deprecated The DisplayText component will be removed in the next
 * major version. Use the Text component instead. See the
 * Polaris component guide on how to use Text.
 *
 * https://polaris.shopify.com/components/text
 */
export declare function DisplayText({ element: Element, children, size, }: DisplayTextProps): JSX.Element;
export {};
//# sourceMappingURL=DisplayText.d.ts.map