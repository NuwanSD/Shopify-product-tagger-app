import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifySync, ShopifySyncSort, ShopifySyncFilter, AvailableShopifySyncSelection, RunShopifySyncInput, Scalars, ErrorShopifySyncInput, CompleteShopifySyncInput } from "../types.js";
export declare const DefaultShopifySyncSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly state: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly errorMessage: true;
    readonly domain: true;
    readonly errorDetails: true;
    readonly syncSince: true;
    readonly force: true;
    readonly models: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySync". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export declare type SelectedShopifySyncOrDefault<Options extends Selectable<AvailableShopifySyncSelection>> = DeepFilterNever<Select<ShopifySync, DefaultSelection<AvailableShopifySyncSelection, Options, typeof DefaultShopifySyncSelection>>>;
/** Options that can be passed to the `ShopifySyncManager#findOne` method */
export interface FindOneShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
/** Options that can be passed to the `ShopifySyncManager#maybeFindOne` method */
export interface MaybeFindOneShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
/** Options that can be passed to the `ShopifySyncManager#findMany` method */
export interface FindManyShopifySyncsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySyncSort | ShopifySyncSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySyncFilter | ShopifySyncFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifySyncManager#findFirst` method */
export interface FindFirstShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySyncSort | ShopifySyncSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySyncFilter | ShopifySyncFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifySyncManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySyncSort | ShopifySyncSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySyncFilter | ShopifySyncFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface RunShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
export interface ErrorShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
export interface CompleteShopifySyncOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySyncSelection;
}
declare type runShopifySyncVariables = RunShopifySyncInput;
/**
  * Executes the run action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function runShopifySync<Options extends RunShopifySyncOptions>(variables: runShopifySyncVariables, options?: LimitToKnownKeys<Options, RunShopifySyncOptions>): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
declare function runShopifySync<Options extends RunShopifySyncOptions>(variables: {
    shopifySync?: RunShopifySyncInput;
    startReason?: (Scalars['String'] | null) | null;
}, options?: LimitToKnownKeys<Options, RunShopifySyncOptions>): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
declare type errorShopifySyncVariables = ErrorShopifySyncInput;
/**
  * Executes the error action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function errorShopifySync<Options extends ErrorShopifySyncOptions>(id: string, variables: errorShopifySyncVariables, options?: LimitToKnownKeys<Options, ErrorShopifySyncOptions>): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
declare function errorShopifySync<Options extends ErrorShopifySyncOptions>(id: string, variables: {
    shopifySync?: ErrorShopifySyncInput;
}, options?: LimitToKnownKeys<Options, ErrorShopifySyncOptions>): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
declare type completeShopifySyncVariables = CompleteShopifySyncInput;
/**
  * Executes the complete action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function completeShopifySync<Options extends CompleteShopifySyncOptions>(id: string, variables: completeShopifySyncVariables, options?: LimitToKnownKeys<Options, CompleteShopifySyncOptions>): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
declare function completeShopifySync<Options extends CompleteShopifySyncOptions>(id: string, variables: {
    shopifySync?: CompleteShopifySyncInput;
}, options?: LimitToKnownKeys<Options, CompleteShopifySyncOptions>): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "shopifySync" */
export declare class ShopifySyncManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifySync by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifySyncOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifySync";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: FindOneShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    /**
 * Finds one shopifySync by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifySyncOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifySync";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: MaybeFindOneShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    /**
 * Finds many shopifySync. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifySyncsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySyncsOptions>): Promise<GadgetRecordList<SelectedShopifySyncOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifySyncs";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: FindManyShopifySyncsOptions;
        schemaType: Query["shopifySync"];
    };
    /**
 * Finds the first matching shopifySync. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifySyncOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifySyncs";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: FindFirstShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    /**
 * Finds the first matching shopifySync. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifySyncOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifySyncs";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: MaybeFindFirstShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    /**
  * Finds one shopifySync by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifySyncOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifySyncOptions>): Promise<GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifySyncs";
        modelApiIdentifier: "shopifySync";
        defaultSelection: typeof DefaultShopifySyncSelection;
        selectionType: AvailableShopifySyncSelection;
        optionsType: FindOneShopifySyncOptions;
        schemaType: Query["shopifySync"];
    };
    run: typeof runShopifySync & {
        readonly type: "action";
        readonly operationName: "runShopifySync";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopifySync";
        readonly modelSelectionField: "shopifySync";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly state: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly errorMessage: true;
            readonly domain: true;
            readonly errorDetails: true;
            readonly syncSince: true;
            readonly force: true;
            readonly models: true;
        };
        readonly selectionType: AvailableShopifySyncSelection;
        readonly optionsType: RunShopifySyncOptions;
        readonly schemaType: ShopifySync | null;
        readonly variablesType: RunShopifySyncInput | {
            shopifySync?: RunShopifySyncInput | undefined;
            startReason?: string | null | undefined;
        } | undefined;
        readonly variables: {
            readonly shopifySync: {
                readonly required: false;
                readonly type: "RunShopifySyncInput";
            };
            readonly startReason: {
                readonly required: false;
                readonly type: "String";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    error: typeof errorShopifySync & {
        readonly type: "action";
        readonly operationName: "errorShopifySync";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopifySync";
        readonly modelSelectionField: "shopifySync";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly state: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly errorMessage: true;
            readonly domain: true;
            readonly errorDetails: true;
            readonly syncSince: true;
            readonly force: true;
            readonly models: true;
        };
        readonly selectionType: AvailableShopifySyncSelection;
        readonly optionsType: ErrorShopifySyncOptions;
        readonly schemaType: ShopifySync | null;
        readonly variablesType: {
            id: string;
            shopifySync?: ErrorShopifySyncInput | undefined;
        } | (ErrorShopifySyncInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly shopifySync: {
                readonly required: false;
                readonly type: "ErrorShopifySyncInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    complete: typeof completeShopifySync & {
        readonly type: "action";
        readonly operationName: "completeShopifySync";
        readonly namespace: null;
        readonly modelApiIdentifier: "shopifySync";
        readonly modelSelectionField: "shopifySync";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly state: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly errorMessage: true;
            readonly domain: true;
            readonly errorDetails: true;
            readonly syncSince: true;
            readonly force: true;
            readonly models: true;
        };
        readonly selectionType: AvailableShopifySyncSelection;
        readonly optionsType: CompleteShopifySyncOptions;
        readonly schemaType: ShopifySync | null;
        readonly variablesType: {
            id: string;
            shopifySync?: CompleteShopifySyncInput | undefined;
        } | (CompleteShopifySyncInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly shopifySync: {
                readonly required: false;
                readonly type: "CompleteShopifySyncInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
}
export {};
