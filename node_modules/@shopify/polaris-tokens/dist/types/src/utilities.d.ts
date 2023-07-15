import type { Exact, MetadataGroup, Tokens, TokenGroup } from './types';
import type { breakpoints as metaBreakpointsTokenGroup, BreakpointsTokenGroup, BreakpointsTokenName } from './token-groups/breakpoints';
export declare function getUnit(value?: string): string | null;
export declare function toPx(value?: string): string | undefined;
export declare function toEm(value?: string, fontSize?: number): string | undefined;
export declare function toRem(value?: string): string | undefined;
export declare function rem(value: string): string;
export declare function tokensToRems<T extends Exact<MetadataGroup, T>>(tokenGroup: T): T;
export declare function createVar(token: string): string;
/**
 * Allowed Polaris keyframes.
 *
 * Result: ['p-keyframes-fade-in', 'p-keyframes-spin', etc...]
 */
export declare function getKeyframeNames(motionTokenGroup: TokenGroup): (string | null)[];
/**
 * Allowed Polaris token custom properties.
 *
 * Result: ['--p-background', '--p-text', etc...]
 */
export declare function getCustomPropertyNames(tokens: Tokens): string[];
export declare function removeMetadata<T extends Exact<MetadataGroup, T>>(tokenGroup: T): TokenGroup<T>;
export declare type MetaBreakpointsTokenGroup = typeof metaBreakpointsTokenGroup;
/**
 * Alias direction used for composing Polaris `breakpoints` utilities.
 */
export declare type BreakpointsAliasDirection = 'up' | 'down' | 'only';
/**
 * A collection of directional media conditions for a given Polaris `breakpoints` alias.
 */
export declare type BreakpointsAliasDirectionMediaConditions = {
    [AliasDirection in BreakpointsAliasDirection]: string;
};
/**
 * Media conditions for all Polaris `breakpoints` aliases.
 */
export declare type BreakpointsMediaConditions = {
    [TokenName in BreakpointsTokenName]: BreakpointsAliasDirectionMediaConditions;
};
export declare function getMediaConditions(breakpoints: BreakpointsTokenGroup): BreakpointsMediaConditions;
export declare function isKeyOf<T extends {
    [key: string]: any;
}>(obj: T, key: PropertyKey | undefined): key is keyof T;
//# sourceMappingURL=utilities.d.ts.map