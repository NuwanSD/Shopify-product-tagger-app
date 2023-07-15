import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, AllowedTag, AllowedTagSort, AllowedTagFilter, AvailableAllowedTagSelection, CreateAllowedTagInput, UpdateAllowedTagInput } from "../types.js";
export declare const DefaultAllowedTagSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly keyword: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "allowedTag". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export declare type SelectedAllowedTagOrDefault<Options extends Selectable<AvailableAllowedTagSelection>> = DeepFilterNever<Select<AllowedTag, DefaultSelection<AvailableAllowedTagSelection, Options, typeof DefaultAllowedTagSelection>>>;
/** Options that can be passed to the `AllowedTagManager#findOne` method */
export interface FindOneAllowedTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableAllowedTagSelection;
}
/** Options that can be passed to the `AllowedTagManager#maybeFindOne` method */
export interface MaybeFindOneAllowedTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableAllowedTagSelection;
}
/** Options that can be passed to the `AllowedTagManager#findMany` method */
export interface FindManyAllowedTagsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableAllowedTagSelection;
    /** Return records sorted by these sorts */
    sort?: AllowedTagSort | AllowedTagSort[] | null;
    /** Only return records matching these filters. */
    filter?: AllowedTagFilter | AllowedTagFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `AllowedTagManager#findFirst` method */
export interface FindFirstAllowedTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableAllowedTagSelection;
    /** Return records sorted by these sorts */
    sort?: AllowedTagSort | AllowedTagSort[] | null;
    /** Only return records matching these filters. */
    filter?: AllowedTagFilter | AllowedTagFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `AllowedTagManager#maybeFindFirst` method */
export interface MaybeFindFirstAllowedTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableAllowedTagSelection;
    /** Return records sorted by these sorts */
    sort?: AllowedTagSort | AllowedTagSort[] | null;
    /** Only return records matching these filters. */
    filter?: AllowedTagFilter | AllowedTagFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateAllowedTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableAllowedTagSelection;
}
export interface DeleteAllowedTagOptions {
}
export interface UpdateAllowedTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableAllowedTagSelection;
}
declare type createAllowedTagVariables = CreateAllowedTagInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createAllowedTag<Options extends CreateAllowedTagOptions>(variables: createAllowedTagVariables, options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;
declare function createAllowedTag<Options extends CreateAllowedTagOptions>(variables: {
    allowedTag?: CreateAllowedTagInput;
}, options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteAllowedTag<Options extends DeleteAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>): Promise<void extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;
declare type updateAllowedTagVariables = UpdateAllowedTagInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateAllowedTag<Options extends UpdateAllowedTagOptions>(id: string, variables: updateAllowedTagVariables, options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;
declare function updateAllowedTag<Options extends UpdateAllowedTagOptions>(id: string, variables: {
    allowedTag?: UpdateAllowedTagInput;
}, options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "allowedTag" */
export declare class AllowedTagManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>): Promise<GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "allowedTag";
        modelApiIdentifier: "allowedTag";
        defaultSelection: typeof DefaultAllowedTagSelection;
        selectionType: AvailableAllowedTagSelection;
        optionsType: FindOneAllowedTagOptions;
        schemaType: Query["allowedTag"];
    };
    /**
 * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneAllowedTagOptions>): Promise<GadgetRecord<SelectedAllowedTagOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "allowedTag";
        modelApiIdentifier: "allowedTag";
        defaultSelection: typeof DefaultAllowedTagSelection;
        selectionType: AvailableAllowedTagSelection;
        optionsType: MaybeFindOneAllowedTagOptions;
        schemaType: Query["allowedTag"];
    };
    /**
 * Finds many allowedTag. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyAllowedTagsOptions>(options?: LimitToKnownKeys<Options, FindManyAllowedTagsOptions>): Promise<GadgetRecordList<SelectedAllowedTagOrDefault<Options>>>;
        type: "findMany";
        operationName: "allowedTags";
        modelApiIdentifier: "allowedTag";
        defaultSelection: typeof DefaultAllowedTagSelection;
        selectionType: AvailableAllowedTagSelection;
        optionsType: FindManyAllowedTagsOptions;
        schemaType: Query["allowedTag"];
    };
    /**
 * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, FindFirstAllowedTagOptions>): Promise<GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;
        type: "findFirst";
        operationName: "allowedTags";
        modelApiIdentifier: "allowedTag";
        defaultSelection: typeof DefaultAllowedTagSelection;
        selectionType: AvailableAllowedTagSelection;
        optionsType: FindFirstAllowedTagOptions;
        schemaType: Query["allowedTag"];
    };
    /**
 * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstAllowedTagOptions>): Promise<GadgetRecord<SelectedAllowedTagOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "allowedTags";
        modelApiIdentifier: "allowedTag";
        defaultSelection: typeof DefaultAllowedTagSelection;
        selectionType: AvailableAllowedTagSelection;
        optionsType: MaybeFindFirstAllowedTagOptions;
        schemaType: Query["allowedTag"];
    };
    /**
  * Finds one allowedTag by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneAllowedTagOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>): Promise<GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "allowedTags";
        modelApiIdentifier: "allowedTag";
        defaultSelection: typeof DefaultAllowedTagSelection;
        selectionType: AvailableAllowedTagSelection;
        optionsType: FindOneAllowedTagOptions;
        schemaType: Query["allowedTag"];
    };
    create: typeof createAllowedTag & {
        readonly type: "action";
        readonly operationName: "createAllowedTag";
        readonly namespace: null;
        readonly modelApiIdentifier: "allowedTag";
        readonly modelSelectionField: "allowedTag";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly keyword: true;
        };
        readonly selectionType: AvailableAllowedTagSelection;
        readonly optionsType: CreateAllowedTagOptions;
        readonly schemaType: AllowedTag | null;
        readonly variablesType: CreateAllowedTagInput | {
            allowedTag?: CreateAllowedTagInput | undefined;
        } | undefined;
        readonly variables: {
            readonly allowedTag: {
                readonly required: false;
                readonly type: "CreateAllowedTagInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    delete: typeof deleteAllowedTag & {
        readonly type: "action";
        readonly operationName: "deleteAllowedTag";
        readonly namespace: null;
        readonly modelApiIdentifier: "allowedTag";
        readonly modelSelectionField: "allowedTag";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteAllowedTagOptions;
        readonly schemaType: null;
        readonly variablesType: {
            id: string;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: false;
        readonly isCreateOrUpdateAction: false;
        readonly paramOnlyVariables: readonly [];
    };
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
    bulkDelete: {
        <Options extends DeleteAllowedTagOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>): Promise<void>;
        type: "action";
        operationName: "bulkDeleteAllowedTags";
        namespace: null;
        modelApiIdentifier: "allowedTag";
        modelSelectionField: "allowedTags";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteAllowedTagOptions;
        schemaType: null;
        variablesType: {
            ids: string[];
        } | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
    };
    update: typeof updateAllowedTag & {
        readonly type: "action";
        readonly operationName: "updateAllowedTag";
        readonly namespace: null;
        readonly modelApiIdentifier: "allowedTag";
        readonly modelSelectionField: "allowedTag";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly keyword: true;
        };
        readonly selectionType: AvailableAllowedTagSelection;
        readonly optionsType: UpdateAllowedTagOptions;
        readonly schemaType: AllowedTag | null;
        readonly variablesType: {
            id: string;
            allowedTag?: UpdateAllowedTagInput | undefined;
        } | (UpdateAllowedTagInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly allowedTag: {
                readonly required: false;
                readonly type: "UpdateAllowedTagInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
}
export {};
