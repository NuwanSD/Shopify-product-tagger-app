import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyGdprRequest, ShopifyGdprRequestSort, ShopifyGdprRequestFilter, AvailableShopifyGdprRequestSelection } from "../types.js";
export declare const DefaultShopifyGdprRequestSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly payload: true;
    readonly topic: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyGdprRequest". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export declare type SelectedShopifyGdprRequestOrDefault<Options extends Selectable<AvailableShopifyGdprRequestSelection>> = DeepFilterNever<Select<ShopifyGdprRequest, DefaultSelection<AvailableShopifyGdprRequestSelection, Options, typeof DefaultShopifyGdprRequestSelection>>>;
/** Options that can be passed to the `ShopifyGdprRequestManager#findOne` method */
export interface FindOneShopifyGdprRequestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyGdprRequestSelection;
}
/** Options that can be passed to the `ShopifyGdprRequestManager#maybeFindOne` method */
export interface MaybeFindOneShopifyGdprRequestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyGdprRequestSelection;
}
/** Options that can be passed to the `ShopifyGdprRequestManager#findMany` method */
export interface FindManyShopifyGdprRequestsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyGdprRequestSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyGdprRequestSort | ShopifyGdprRequestSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyGdprRequestFilter | ShopifyGdprRequestFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyGdprRequestManager#findFirst` method */
export interface FindFirstShopifyGdprRequestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyGdprRequestSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyGdprRequestSort | ShopifyGdprRequestSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyGdprRequestFilter | ShopifyGdprRequestFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyGdprRequestManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyGdprRequestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyGdprRequestSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyGdprRequestSort | ShopifyGdprRequestSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyGdprRequestFilter | ShopifyGdprRequestFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyGdprRequest" */
export declare class ShopifyGdprRequestManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyGdprRequest by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyGdprRequestOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyGdprRequestOptions>): Promise<GadgetRecord<SelectedShopifyGdprRequestOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyGdprRequest";
        modelApiIdentifier: "shopifyGdprRequest";
        defaultSelection: typeof DefaultShopifyGdprRequestSelection;
        selectionType: AvailableShopifyGdprRequestSelection;
        optionsType: FindOneShopifyGdprRequestOptions;
        schemaType: Query["shopifyGdprRequest"];
    };
    /**
 * Finds one shopifyGdprRequest by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyGdprRequestOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyGdprRequestOptions>): Promise<GadgetRecord<SelectedShopifyGdprRequestOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyGdprRequest";
        modelApiIdentifier: "shopifyGdprRequest";
        defaultSelection: typeof DefaultShopifyGdprRequestSelection;
        selectionType: AvailableShopifyGdprRequestSelection;
        optionsType: MaybeFindOneShopifyGdprRequestOptions;
        schemaType: Query["shopifyGdprRequest"];
    };
    /**
 * Finds many shopifyGdprRequest. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyGdprRequestsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyGdprRequestsOptions>): Promise<GadgetRecordList<SelectedShopifyGdprRequestOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyGdprRequests";
        modelApiIdentifier: "shopifyGdprRequest";
        defaultSelection: typeof DefaultShopifyGdprRequestSelection;
        selectionType: AvailableShopifyGdprRequestSelection;
        optionsType: FindManyShopifyGdprRequestsOptions;
        schemaType: Query["shopifyGdprRequest"];
    };
    /**
 * Finds the first matching shopifyGdprRequest. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyGdprRequestOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyGdprRequestOptions>): Promise<GadgetRecord<SelectedShopifyGdprRequestOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyGdprRequests";
        modelApiIdentifier: "shopifyGdprRequest";
        defaultSelection: typeof DefaultShopifyGdprRequestSelection;
        selectionType: AvailableShopifyGdprRequestSelection;
        optionsType: FindFirstShopifyGdprRequestOptions;
        schemaType: Query["shopifyGdprRequest"];
    };
    /**
 * Finds the first matching shopifyGdprRequest. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyGdprRequestOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyGdprRequestOptions>): Promise<GadgetRecord<SelectedShopifyGdprRequestOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyGdprRequests";
        modelApiIdentifier: "shopifyGdprRequest";
        defaultSelection: typeof DefaultShopifyGdprRequestSelection;
        selectionType: AvailableShopifyGdprRequestSelection;
        optionsType: MaybeFindFirstShopifyGdprRequestOptions;
        schemaType: Query["shopifyGdprRequest"];
    };
    /**
  * Finds one shopifyGdprRequest by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifyGdprRequestOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyGdprRequestOptions>): Promise<GadgetRecord<SelectedShopifyGdprRequestOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyGdprRequests";
        modelApiIdentifier: "shopifyGdprRequest";
        defaultSelection: typeof DefaultShopifyGdprRequestSelection;
        selectionType: AvailableShopifyGdprRequestSelection;
        optionsType: FindOneShopifyGdprRequestOptions;
        schemaType: Query["shopifyGdprRequest"];
    };
}
