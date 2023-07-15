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
      AllowedTag,
      AllowedTagSort,
      AllowedTagFilter,
      AvailableAllowedTagSelection,
      CreateAllowedTagInput,
      BulkDeleteAllowedTagsResult,
      UpdateAllowedTagInput,
  
} from "../types.js";

export const DefaultAllowedTagSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "keyword": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "allowedTag". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedAllowedTagOrDefault<Options extends Selectable<AvailableAllowedTagSelection>> = DeepFilterNever<
  Select<
    AllowedTag, 
    DefaultSelection<
      AvailableAllowedTagSelection,
      Options,
      typeof DefaultAllowedTagSelection
    >
  >>;

/** Options that can be passed to the `AllowedTagManager#findOne` method */
export interface FindOneAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
};


/** Options that can be passed to the `AllowedTagManager#maybeFindOne` method */
export interface MaybeFindOneAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
};


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
};


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
};


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
};



export interface CreateAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
};



export interface DeleteAllowedTagOptions {
};



export interface UpdateAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
};




    
  type createAllowedTagVariables =
      CreateAllowedTagInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createAllowedTag<Options extends CreateAllowedTagOptions>(
  
    variables: createAllowedTagVariables,

  options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>
): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>

// Default nested api identifier overload
async function createAllowedTag<Options extends CreateAllowedTagOptions>(
  
      variables: {
          allowedTag?: CreateAllowedTagInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>
): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;

// Function implementation
async function createAllowedTag<Options extends CreateAllowedTagOptions>(
  this: AllowedTagManager,
  
      variables: {
          allowedTag?: CreateAllowedTagInput,
        }
    
      | createAllowedTagVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>
): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>
 {
    let newVariables: {
      allowedTag?: CreateAllowedTagInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "allowedTag";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateAllowedTagInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateAllowedTagInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "createAllowedTag",
      DefaultAllowedTagSelection,
      "allowedTag",
      "allowedTag",
      false,
      {
        "allowedTag": {
          value: newVariables.allowedTag,
          required: false,
          type: "CreateAllowedTagInput",
        },
      },
      options,
      null
    ));
  }
  
    

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Default nested api identifier overload
async function deleteAllowedTag<Options extends DeleteAllowedTagOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;

// Function implementation
async function deleteAllowedTag<Options extends DeleteAllowedTagOptions>(
  this: AllowedTagManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteAllowedTag",
      null,
      "allowedTag",
      "allowedTag",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
      },
      options,
      null
    ));
  }
  
    
  type updateAllowedTagVariables =
      UpdateAllowedTagInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateAllowedTag<Options extends UpdateAllowedTagOptions>(
  id: string,
    variables: updateAllowedTagVariables,

  options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>
): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>

// Default nested api identifier overload
async function updateAllowedTag<Options extends UpdateAllowedTagOptions>(
  id: string,
      variables: {
          allowedTag?: UpdateAllowedTagInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>
): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>;

// Function implementation
async function updateAllowedTag<Options extends UpdateAllowedTagOptions>(
  this: AllowedTagManager,
  id: string,
      variables: {
          allowedTag?: UpdateAllowedTagInput,
        }
    
      | updateAllowedTagVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>
): Promise<SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>>
 {
    let newVariables: {
      allowedTag?: UpdateAllowedTagInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "allowedTag";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateAllowedTagInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateAllowedTagInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "updateAllowedTag",
      DefaultAllowedTagSelection,
      "allowedTag",
      "allowedTag",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "allowedTag": {
          value: newVariables.allowedTag,
          required: false,
          type: "UpdateAllowedTagInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "allowedTag" */
export class AllowedTagManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "allowedTag";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: FindOneAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends FindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>) => {
    return await findOneRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "allowedTag",
      id,
      DefaultAllowedTagSelection,
      "allowedTag",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "allowedTag",
    modelApiIdentifier: "allowedTag",
    defaultSelection: DefaultAllowedTagSelection,
    selectionType: {} as AvailableAllowedTagSelection,
    optionsType: {} as FindOneAllowedTagOptions,
    schemaType: null as Query["allowedTag"],
  } as const
)

  
    /**
 * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "allowedTag";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: MaybeFindOneAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends MaybeFindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneAllowedTagOptions>) => {
    const record = await findOneRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "allowedTag",
      id,
      DefaultAllowedTagSelection,
      "allowedTag",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "allowedTag",
    modelApiIdentifier: "allowedTag",
    defaultSelection: DefaultAllowedTagSelection,
    selectionType: {} as AvailableAllowedTagSelection,
    optionsType: {} as MaybeFindOneAllowedTagOptions,
    schemaType: null as Query["allowedTag"],
  } as const
)

  
    /**
 * Finds many allowedTag. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyAllowedTagsOptions>(options?: LimitToKnownKeys<Options, FindManyAllowedTagsOptions>):
    Promise<
      GadgetRecordList<
        SelectedAllowedTagOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "allowedTags";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: FindManyAllowedTagsOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends FindManyAllowedTagsOptions>(options?: LimitToKnownKeys<Options, FindManyAllowedTagsOptions>):
    Promise<
      GadgetRecordList<
        SelectedAllowedTagOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "allowedTags",
      DefaultAllowedTagSelection,
      "allowedTag",
      options
    );
  },
  {
    type: "findMany",
    operationName: "allowedTags",
    modelApiIdentifier: "allowedTag",
    defaultSelection: DefaultAllowedTagSelection,
    selectionType: {} as AvailableAllowedTagSelection,
    optionsType: {} as FindManyAllowedTagsOptions,
    schemaType: null as Query["allowedTag"],
  } as const
);
  
    /**
 * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, FindFirstAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "allowedTags";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: FindFirstAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends FindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, FindFirstAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "allowedTags",
      DefaultAllowedTagSelection,
      "allowedTag",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "allowedTags",
    modelApiIdentifier: "allowedTag",
    defaultSelection: DefaultAllowedTagSelection,
    selectionType: {} as AvailableAllowedTagSelection,
    optionsType: {} as FindFirstAllowedTagOptions,
    schemaType: null as Query["allowedTag"],
  } as const
);
  
    /**
 * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "allowedTags";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: MaybeFindFirstAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends MaybeFindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "allowedTags",
      DefaultAllowedTagSelection,
      "allowedTag",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "allowedTags",
    modelApiIdentifier: "allowedTag",
    defaultSelection: DefaultAllowedTagSelection,
    selectionType: {} as AvailableAllowedTagSelection,
    optionsType: {} as MaybeFindFirstAllowedTagOptions,
    schemaType: null as Query["allowedTag"],
  } as const
);
  
    /**
  * Finds one allowedTag by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneAllowedTagOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "allowedTags";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: FindOneAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends FindOneAllowedTagOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedAllowedTagOrDefault<Options>
      > & SelectedAllowedTagOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "allowedTags",
      "id",
      value,
      DefaultAllowedTagSelection,
      "allowedTag",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "allowedTags",
    modelApiIdentifier: "allowedTag",
    defaultSelection: DefaultAllowedTagSelection,
    selectionType: {} as AvailableAllowedTagSelection,
    optionsType: {} as FindOneAllowedTagOptions,
    schemaType: null as Query["allowedTag"],
  } as const
)
  
    create = Object.assign(createAllowedTag,
  {
    type: "action",
    operationName: "createAllowedTag",
    namespace: null,
    modelApiIdentifier: "allowedTag",
    modelSelectionField: "allowedTag",
    isBulk: false,
    defaultSelection: DefaultAllowedTagSelection,
    selectionType: {} as AvailableAllowedTagSelection,
    optionsType: {} as CreateAllowedTagOptions,
    schemaType: null as Query["allowedTag"],

    variablesType: undefined as {
      
              allowedTag?: CreateAllowedTagInput,
          }  | createAllowedTagVariables
    
    | undefined,

    variables: {
      "allowedTag": {
        required: false,
        type: "CreateAllowedTagInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deleteAllowedTag,
  {
    type: "action",
    operationName: "deleteAllowedTag",
    namespace: null,
    modelApiIdentifier: "allowedTag",
    modelSelectionField: "allowedTag",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteAllowedTagOptions,
    schemaType: null,

    variablesType: undefined as {
      id: string,
          } | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: false,
    isCreateOrUpdateAction: false,
    paramOnlyVariables: [],
  } as const
)
  
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
bulkDelete: {
  <Options extends DeleteAllowedTagOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>
  ): Promise<void>;
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
} = Object.assign(
  async <Options extends DeleteAllowedTagOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteAllowedTags",
      null,
      "allowedTag",
      "allowedTags",
      true,
      {
        ids: {
          value: ids,
          required: true,
          type: "[GadgetID!]",
        },
      },
      options,
      null
    ));
  },
  {
    type: "action",
    operationName: "bulkDeleteAllowedTags",
    namespace: null,
    modelApiIdentifier: "allowedTag",
    modelSelectionField: "allowedTags",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteAllowedTagOptions,
    schemaType: null,

    variablesType: undefined as {
      ids: string[]
    } | undefined,

    variables: {
      ids: {
        required: true,
        type: "[GadgetID!]",
      },
    },
  } as const
)
  
    update = Object.assign(updateAllowedTag,
  {
    type: "action",
    operationName: "updateAllowedTag",
    namespace: null,
    modelApiIdentifier: "allowedTag",
    modelSelectionField: "allowedTag",
    isBulk: false,
    defaultSelection: DefaultAllowedTagSelection,
    selectionType: {} as AvailableAllowedTagSelection,
    optionsType: {} as UpdateAllowedTagOptions,
    schemaType: null as Query["allowedTag"],

    variablesType: undefined as {
      id: string,
              allowedTag?: UpdateAllowedTagInput,
          }  | updateAllowedTagVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "allowedTag": {
        required: false,
        type: "UpdateAllowedTagInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
