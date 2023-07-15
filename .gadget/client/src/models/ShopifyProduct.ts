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
      ShopifyProduct,
      ShopifyProductSort,
      ShopifyProductFilter,
      AvailableShopifyProductSelection,
  
} from "../types.js";

export const DefaultShopifyProductSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "productCategory": true,
  "body": true,
  "shopifyCreatedAt": true,
  "handle": true,
  "productType": true,
  "publishedAt": true,
  "publishedScope": true,
  "status": true,
  "tags": true,
  "templateSuffix": true,
  "title": true,
  "shopifyUpdatedAt": true,
  "vendor": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "shopifyProduct". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedShopifyProductOrDefault<Options extends Selectable<AvailableShopifyProductSelection>> = DeepFilterNever<
  Select<
    ShopifyProduct, 
    DefaultSelection<
      AvailableShopifyProductSelection,
      Options,
      typeof DefaultShopifyProductSelection
    >
  >>;

/** Options that can be passed to the `ShopifyProductManager#findOne` method */
export interface FindOneShopifyProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
};


/** Options that can be passed to the `ShopifyProductManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductSelection;
};


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
};


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
};


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
};





/** All the actions available at the collection level and record level for "shopifyProduct" */
export class ShopifyProductManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyProduct";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: FindOneShopifyProductOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends FindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductOptions>) => {
    return await findOneRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProduct",
      id,
      DefaultShopifyProductSelection,
      "shopifyProduct",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyProduct",
    modelApiIdentifier: "shopifyProduct",
    defaultSelection: DefaultShopifyProductSelection,
    selectionType: {} as AvailableShopifyProductSelection,
    optionsType: {} as FindOneShopifyProductOptions,
    schemaType: null as Query["shopifyProduct"],
  } as const
)

  
    /**
 * Finds one shopifyProduct by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyProduct";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: MaybeFindOneShopifyProductOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductOptions>) => {
    const record = await findOneRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProduct",
      id,
      DefaultShopifyProductSelection,
      "shopifyProduct",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyProduct",
    modelApiIdentifier: "shopifyProduct",
    defaultSelection: DefaultShopifyProductSelection,
    selectionType: {} as AvailableShopifyProductSelection,
    optionsType: {} as MaybeFindOneShopifyProductOptions,
    schemaType: null as Query["shopifyProduct"],
  } as const
)

  
    /**
 * Finds many shopifyProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyProductOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyProducts";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: FindManyShopifyProductsOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends FindManyShopifyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyProductOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProducts",
      DefaultShopifyProductSelection,
      "shopifyProduct",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyProducts",
    modelApiIdentifier: "shopifyProduct",
    defaultSelection: DefaultShopifyProductSelection,
    selectionType: {} as AvailableShopifyProductSelection,
    optionsType: {} as FindManyShopifyProductsOptions,
    schemaType: null as Query["shopifyProduct"],
  } as const
);
  
    /**
 * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyProducts";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: FindFirstShopifyProductOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends FindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProducts",
      DefaultShopifyProductSelection,
      "shopifyProduct",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyProducts",
    modelApiIdentifier: "shopifyProduct",
    defaultSelection: DefaultShopifyProductSelection,
    selectionType: {} as AvailableShopifyProductSelection,
    optionsType: {} as FindFirstShopifyProductOptions,
    schemaType: null as Query["shopifyProduct"],
  } as const
);
  
    /**
 * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyProducts";
  modelApiIdentifier: "shopifyProduct";
  defaultSelection: typeof DefaultShopifyProductSelection;
  selectionType: AvailableShopifyProductSelection;
  optionsType: MaybeFindFirstShopifyProductOptions;
  schemaType: Query["shopifyProduct"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyProductOrDefault<Options>>(
      this,
      "shopifyProducts",
      DefaultShopifyProductSelection,
      "shopifyProduct",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyProducts",
    modelApiIdentifier: "shopifyProduct",
    defaultSelection: DefaultShopifyProductSelection,
    selectionType: {} as AvailableShopifyProductSelection,
    optionsType: {} as MaybeFindFirstShopifyProductOptions,
    schemaType: null as Query["shopifyProduct"],
  } as const
);
  
}
