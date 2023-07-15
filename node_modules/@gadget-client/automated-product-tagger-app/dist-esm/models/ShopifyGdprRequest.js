import {
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyGdprRequestSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "payload": true,
  "topic": true
};
;
;
;
;
;
class ShopifyGdprRequestManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyGdprRequest by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyGdprRequest",
          id,
          DefaultShopifyGdprRequestSelection,
          "shopifyGdprRequest",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyGdprRequest",
        modelApiIdentifier: "shopifyGdprRequest",
        defaultSelection: DefaultShopifyGdprRequestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one shopifyGdprRequest by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyGdprRequest",
          id,
          DefaultShopifyGdprRequestSelection,
          "shopifyGdprRequest",
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyGdprRequest",
        modelApiIdentifier: "shopifyGdprRequest",
        defaultSelection: DefaultShopifyGdprRequestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many shopifyGdprRequest. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyGdprRequests",
          DefaultShopifyGdprRequestSelection,
          "shopifyGdprRequest",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyGdprRequests",
        modelApiIdentifier: "shopifyGdprRequest",
        defaultSelection: DefaultShopifyGdprRequestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching shopifyGdprRequest. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyGdprRequests",
          DefaultShopifyGdprRequestSelection,
          "shopifyGdprRequest",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyGdprRequests",
        modelApiIdentifier: "shopifyGdprRequest",
        defaultSelection: DefaultShopifyGdprRequestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching shopifyGdprRequest. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyGdprRequests",
          DefaultShopifyGdprRequestSelection,
          "shopifyGdprRequest",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyGdprRequests",
        modelApiIdentifier: "shopifyGdprRequest",
        defaultSelection: DefaultShopifyGdprRequestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one shopifyGdprRequest by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifyGdprRequests",
          "id",
          value,
          DefaultShopifyGdprRequestSelection,
          "shopifyGdprRequest",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyGdprRequests",
        modelApiIdentifier: "shopifyGdprRequest",
        defaultSelection: DefaultShopifyGdprRequestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
  }
}
export {
  DefaultShopifyGdprRequestSelection,
  ShopifyGdprRequestManager
};
//# sourceMappingURL=ShopifyGdprRequest.js.map
