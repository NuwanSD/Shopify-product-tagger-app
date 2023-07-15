import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
      ShopifySync,
      ShopifySyncSort,
      ShopifySyncFilter,
      AvailableShopifySyncSelection,
      RunShopifySyncInput,
      Scalars,
      ErrorShopifySyncInput,
      CompleteShopifySyncInput,
  
} from "../types.js";

export const DefaultShopifySyncSelection = {
  "id": true,
  "__typename": true,
  "state": true,
  "createdAt": true,
  "updatedAt": true,
  "errorMessage": true,
  "domain": true,
  "errorDetails": true,
  "syncSince": true,
  "force": true,
  "models": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "shopifySync". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedShopifySyncOrDefault<Options extends Selectable<AvailableShopifySyncSelection>> = DeepFilterNever<
  Select<
    ShopifySync, 
    DefaultSelection<
      AvailableShopifySyncSelection,
      Options,
      typeof DefaultShopifySyncSelection
    >
  >>;

/** Options that can be passed to the `ShopifySyncManager#findOne` method */
export interface FindOneShopifySyncOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySyncSelection;
};


/** Options that can be passed to the `ShopifySyncManager#maybeFindOne` method */
export interface MaybeFindOneShopifySyncOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySyncSelection;
};


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
};


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
};


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
};



export interface RunShopifySyncOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySyncSelection;
};



export interface ErrorShopifySyncOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySyncSelection;
};



export interface CompleteShopifySyncOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifySyncSelection;
};




    
  type runShopifySyncVariables =
      RunShopifySyncInput



/**
  * Executes the run action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function runShopifySync<Options extends RunShopifySyncOptions>(
  
    variables: runShopifySyncVariables,

  options?: LimitToKnownKeys<Options, RunShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>

// Default nested api identifier overload
async function runShopifySync<Options extends RunShopifySyncOptions>(
  
      variables: {
          shopifySync?: RunShopifySyncInput,
          startReason?: (Scalars['String'] | null) | null,
        },
  
  options?: LimitToKnownKeys<Options, RunShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;

// Function implementation
async function runShopifySync<Options extends RunShopifySyncOptions>(
  this: ShopifySyncManager,
  
      variables: {
          shopifySync?: RunShopifySyncInput,
          startReason?: (Scalars['String'] | null) | null,
        }
    
      | runShopifySyncVariables
    ,
  
  options?: LimitToKnownKeys<Options, RunShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>
 {
    let newVariables: {
      shopifySync?: RunShopifySyncInput,
      startReason?: (Scalars['String'] | null) | null,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "shopifySync";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: RunShopifySyncInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof RunShopifySyncInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "runShopifySync",
      DefaultShopifySyncSelection,
      "shopifySync",
      "shopifySync",
      false,
      {
        "shopifySync": {
          value: newVariables.shopifySync,
          required: false,
          type: "RunShopifySyncInput",
        },
        "startReason": {
          value: newVariables.startReason,
          required: false,
          type: "String",
        },
      },
      options,
      null
    ));
  }
  
    
  type errorShopifySyncVariables =
      ErrorShopifySyncInput



/**
  * Executes the error action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function errorShopifySync<Options extends ErrorShopifySyncOptions>(
  id: string,
    variables: errorShopifySyncVariables,

  options?: LimitToKnownKeys<Options, ErrorShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>

// Default nested api identifier overload
async function errorShopifySync<Options extends ErrorShopifySyncOptions>(
  id: string,
      variables: {
          shopifySync?: ErrorShopifySyncInput,
        },
  
  options?: LimitToKnownKeys<Options, ErrorShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;

// Function implementation
async function errorShopifySync<Options extends ErrorShopifySyncOptions>(
  this: ShopifySyncManager,
  id: string,
      variables: {
          shopifySync?: ErrorShopifySyncInput,
        }
    
      | errorShopifySyncVariables
    ,
  
  options?: LimitToKnownKeys<Options, ErrorShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>
 {
    let newVariables: {
      shopifySync?: ErrorShopifySyncInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "shopifySync";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: ErrorShopifySyncInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof ErrorShopifySyncInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "errorShopifySync",
      DefaultShopifySyncSelection,
      "shopifySync",
      "shopifySync",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "shopifySync": {
          value: newVariables.shopifySync,
          required: false,
          type: "ErrorShopifySyncInput",
        },
      },
      options,
      null
    ));
  }
  
    
  type completeShopifySyncVariables =
      CompleteShopifySyncInput



/**
  * Executes the complete action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function completeShopifySync<Options extends CompleteShopifySyncOptions>(
  id: string,
    variables: completeShopifySyncVariables,

  options?: LimitToKnownKeys<Options, CompleteShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>

// Default nested api identifier overload
async function completeShopifySync<Options extends CompleteShopifySyncOptions>(
  id: string,
      variables: {
          shopifySync?: CompleteShopifySyncInput,
        },
  
  options?: LimitToKnownKeys<Options, CompleteShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>;

// Function implementation
async function completeShopifySync<Options extends CompleteShopifySyncOptions>(
  this: ShopifySyncManager,
  id: string,
      variables: {
          shopifySync?: CompleteShopifySyncInput,
        }
    
      | completeShopifySyncVariables
    ,
  
  options?: LimitToKnownKeys<Options, CompleteShopifySyncOptions>
): Promise<SelectedShopifySyncOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySyncOrDefault<Options>>>
 {
    let newVariables: {
      shopifySync?: CompleteShopifySyncInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "shopifySync";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CompleteShopifySyncInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CompleteShopifySyncInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "completeShopifySync",
      DefaultShopifySyncSelection,
      "shopifySync",
      "shopifySync",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "shopifySync": {
          value: newVariables.shopifySync,
          required: false,
          type: "CompleteShopifySyncInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "shopifySync" */
export class ShopifySyncManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifySync by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifySyncOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySyncOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySyncOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifySync";
  modelApiIdentifier: "shopifySync";
  defaultSelection: typeof DefaultShopifySyncSelection;
  selectionType: AvailableShopifySyncSelection;
  optionsType: FindOneShopifySyncOptions;
  schemaType: Query["shopifySync"];
} = Object.assign(
  async <Options extends FindOneShopifySyncOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySyncOptions>) => {
    return await findOneRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "shopifySync",
      id,
      DefaultShopifySyncSelection,
      "shopifySync",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifySync",
    modelApiIdentifier: "shopifySync",
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as FindOneShopifySyncOptions,
    schemaType: null as Query["shopifySync"],
  } as const
)

  
    /**
 * Finds one shopifySync by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifySyncOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySyncOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySyncOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifySync";
  modelApiIdentifier: "shopifySync";
  defaultSelection: typeof DefaultShopifySyncSelection;
  selectionType: AvailableShopifySyncSelection;
  optionsType: MaybeFindOneShopifySyncOptions;
  schemaType: Query["shopifySync"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifySyncOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySyncOptions>) => {
    const record = await findOneRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "shopifySync",
      id,
      DefaultShopifySyncSelection,
      "shopifySync",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifySync",
    modelApiIdentifier: "shopifySync",
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as MaybeFindOneShopifySyncOptions,
    schemaType: null as Query["shopifySync"],
  } as const
)

  
    /**
 * Finds many shopifySync. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifySyncsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySyncsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySyncOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifySyncs";
  modelApiIdentifier: "shopifySync";
  defaultSelection: typeof DefaultShopifySyncSelection;
  selectionType: AvailableShopifySyncSelection;
  optionsType: FindManyShopifySyncsOptions;
  schemaType: Query["shopifySync"];
} = Object.assign(
  async <Options extends FindManyShopifySyncsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySyncsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifySyncOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "shopifySyncs",
      DefaultShopifySyncSelection,
      "shopifySync",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifySyncs",
    modelApiIdentifier: "shopifySync",
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as FindManyShopifySyncsOptions,
    schemaType: null as Query["shopifySync"],
  } as const
);
  
    /**
 * Finds the first matching shopifySync. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifySyncOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySyncOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySyncOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifySyncs";
  modelApiIdentifier: "shopifySync";
  defaultSelection: typeof DefaultShopifySyncSelection;
  selectionType: AvailableShopifySyncSelection;
  optionsType: FindFirstShopifySyncOptions;
  schemaType: Query["shopifySync"];
} = Object.assign(
  async <Options extends FindFirstShopifySyncOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySyncOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySyncOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "shopifySyncs",
      DefaultShopifySyncSelection,
      "shopifySync",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifySyncs",
    modelApiIdentifier: "shopifySync",
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as FindFirstShopifySyncOptions,
    schemaType: null as Query["shopifySync"],
  } as const
);
  
    /**
 * Finds the first matching shopifySync. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifySyncOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySyncOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySyncOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifySyncs";
  modelApiIdentifier: "shopifySync";
  defaultSelection: typeof DefaultShopifySyncSelection;
  selectionType: AvailableShopifySyncSelection;
  optionsType: MaybeFindFirstShopifySyncOptions;
  schemaType: Query["shopifySync"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifySyncOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySyncOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySyncOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "shopifySyncs",
      DefaultShopifySyncSelection,
      "shopifySync",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifySyncs",
    modelApiIdentifier: "shopifySync",
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as MaybeFindFirstShopifySyncOptions,
    schemaType: null as Query["shopifySync"],
  } as const
);
  
    /**
  * Finds one shopifySync by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopifySyncOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifySyncOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifySyncOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopifySyncs";
  modelApiIdentifier: "shopifySync";
  defaultSelection: typeof DefaultShopifySyncSelection;
  selectionType: AvailableShopifySyncSelection;
  optionsType: FindOneShopifySyncOptions;
  schemaType: Query["shopifySync"];
} = Object.assign(
  async <Options extends FindOneShopifySyncOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifySyncOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifySyncOrDefault<Options>
      > & SelectedShopifySyncOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifySyncOrDefault<Options>>(
      this,
      "shopifySyncs",
      "id",
      value,
      DefaultShopifySyncSelection,
      "shopifySync",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifySyncs",
    modelApiIdentifier: "shopifySync",
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as FindOneShopifySyncOptions,
    schemaType: null as Query["shopifySync"],
  } as const
)
  
    run = Object.assign(runShopifySync,
  {
    type: "action",
    operationName: "runShopifySync",
    namespace: null,
    modelApiIdentifier: "shopifySync",
    modelSelectionField: "shopifySync",
    isBulk: false,
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as RunShopifySyncOptions,
    schemaType: null as Query["shopifySync"],

    variablesType: undefined as {
      
              shopifySync?: RunShopifySyncInput,
              startReason?: (Scalars['String'] | null) | null,
          }  | runShopifySyncVariables
    
    | undefined,

    variables: {
      "shopifySync": {
        required: false,
        type: "RunShopifySyncInput",
      },
      "startReason": {
        required: false,
        type: "String",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    error = Object.assign(errorShopifySync,
  {
    type: "action",
    operationName: "errorShopifySync",
    namespace: null,
    modelApiIdentifier: "shopifySync",
    modelSelectionField: "shopifySync",
    isBulk: false,
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as ErrorShopifySyncOptions,
    schemaType: null as Query["shopifySync"],

    variablesType: undefined as {
      id: string,
              shopifySync?: ErrorShopifySyncInput,
          }  | errorShopifySyncVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifySync": {
        required: false,
        type: "ErrorShopifySyncInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    complete = Object.assign(completeShopifySync,
  {
    type: "action",
    operationName: "completeShopifySync",
    namespace: null,
    modelApiIdentifier: "shopifySync",
    modelSelectionField: "shopifySync",
    isBulk: false,
    defaultSelection: DefaultShopifySyncSelection,
    selectionType: {} as AvailableShopifySyncSelection,
    optionsType: {} as CompleteShopifySyncOptions,
    schemaType: null as Query["shopifySync"],

    variablesType: undefined as {
      id: string,
              shopifySync?: CompleteShopifySyncInput,
          }  | completeShopifySyncVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifySync": {
        required: false,
        type: "CompleteShopifySyncInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
