import React from 'react';
declare type Variation = 'positive' | 'negative' | 'warning' | 'strong' | 'subdued' | 'code';
export interface TextStyleProps {
    /** Give text additional visual meaning */
    variation?: Variation;
    /** The content that should get the intended styling */
    children?: React.ReactNode;
}
/**
 * @deprecated The TextStyle component will be removed in the next
 * major version. Use the Text component instead. See the
 * Polaris component guide on how to use Text.
 *
 * https://polaris.shopify.com/components/text
 */
export declare function TextStyle({ variation, children }: TextStyleProps): JSX.Element;
export {};
//# sourceMappingURL=TextStyle.d.ts.map