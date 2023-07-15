import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyProduct, ShopifyProductSort, ShopifyProductFilter, AvailableShopifyProductSelection } from "../types.js";
export declare const DefaultShopifyProductSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly productCategory: true;
    readonly body: true;
    readonly shopifyCreatedAt: true;
    readonly handle: true;
    readonly productType: true;
    readonly publishedAt: true;
    readonly publishedScope: true;
    readonly status: true;
    readonly tags: true;
    readonly templateSuffix: true;
    readonly title: true;
    readonly shopifyUpdatedAt: true;
    readonly vendor: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyProduct". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export declare type SelectedShopifyProductOrDefault<Options extends Selectable<AvailableShopifyProductSelection>> = DeepFilterNever<Select<ShopifyProduct, DefaultSelection<AvailableShopifyProductSelection, Options, typeof DefaultShopifyProductSelection>>>;
/** Options that can be passed to the `ShopifyProductManager#findOne` method */
export interface FindOneShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
}
/** Options that can be passed to the `ShopifyProductManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
}
/** Options that can be passed to the `ShopifyProductManager#findMany` method */
export interface FindManyShopifyProductsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductSort | ShopifyProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyProductManager#findFirst` method */
export interface FindFirstShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductSort | ShopifyProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyProductManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductSort | ShopifyProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyProduct" */
export declare class ShopifyProductManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductOptions>): Promise<GadgetRecord<SelectedShopifyProductOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyProduct";
        modelApiIdentifier: "shopifyProduct";
        defaultSelection: typeof DefaultShopifyProductSelection;
        selectionType: AvailableShopifyProductSelection;
        optionsType: FindOneShopifyProductOptions;
        schemaType: Query["shopifyProduct"];
    };
    /**
 * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductOptions>): Promise<GadgetRecord<SelectedShopifyProductOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyProduct";
        modelApiIdentifier: "shopifyProduct";
        defaultSelection: typeof DefaultShopifyProductSelection;
        selectionType: AvailableShopifyProductSelection;
        optionsType: MaybeFindOneShopifyProductOptions;
        schemaType: Query["shopifyProduct"];
    };
    /**
 * Finds many shopifyProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductsOptions>): Promise<GadgetRecordList<SelectedShopifyProductOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyProducts";
        modelApiIdentifier: "shopifyProduct";
        defaultSelection: typeof DefaultShopifyProductSelection;
        selectionType: AvailableShopifyProductSelection;
        optionsType: FindManyShopifyProductsOptions;
        schemaType: Query["shopifyProduct"];
    };
    /**
 * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductOptions>): Promise<GadgetRecord<SelectedShopifyProductOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyProducts";
        modelApiIdentifier: "shopifyProduct";
        defaultSelection: typeof DefaultShopifyProductSelection;
        selectionType: AvailableShopifyProductSelection;
        optionsType: FindFirstShopifyProductOptions;
        schemaType: Query["shopifyProduct"];
    };
    /**
 * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductOptions>): Promise<GadgetRecord<SelectedShopifyProductOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyProducts";
        modelApiIdentifier: "shopifyProduct";
        defaultSelection: typeof DefaultShopifyProductSelection;
        selectionType: AvailableShopifyProductSelection;
        optionsType: MaybeFindFirstShopifyProductOptions;
        schemaType: Query["shopifyProduct"];
    };
}
