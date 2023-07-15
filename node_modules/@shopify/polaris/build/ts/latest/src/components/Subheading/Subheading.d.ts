import React from 'react';
import type { HeadingTagName } from '../../types';
export interface SubheadingProps {
    /**
     * The element name to use for the subheading
     * @default 'h3'
     */
    element?: HeadingTagName;
    /** Text to display in subheading */
    children?: React.ReactNode;
}
/**
 * @deprecated The Subheading component will be removed in the next
 * major version. Use the Text component instead. See the
 * Polaris component guide on how to use Text.
 *
 * https://polaris.shopify.com/components/text
 */
export declare function Subheading({ element: Element, children, }: SubheadingProps): JSX.Element;
//# sourceMappingURL=Subheading.d.ts.map