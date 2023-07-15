import type { ModelMetadata } from "./types";

/**
 * Internal variable to store model blobs with GraphQL typename as the key, and use them in the action code functions.
 * @internal
 */
export const modelsMap: Record<string, ModelMetadata> = {};

/**
 * Internal variable to map model apiIdentifier to GraphQL typename in modelsMap.
 * @internal
 */
export const modelListIndex: Record<string, string> = {};
