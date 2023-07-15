"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ShopifyGdprRequest_exports = {};
__export(ShopifyGdprRequest_exports, {
  DefaultShopifyGdprRequestSelection: () => DefaultShopifyGdprRequestSelection,
  ShopifyGdprRequestManager: () => ShopifyGdprRequestManager
});
module.exports = __toCommonJS(ShopifyGdprRequest_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
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
        return await (0, import_api_client_core.findOneRunner)(
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
        const record = await (0, import_api_client_core.findOneRunner)(
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
        return await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyGdprRequests",
          DefaultShopifyGdprRequestSelection,
          "shopifyGdprRequest",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
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
        return await (0, import_api_client_core.findOneByFieldRunner)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyGdprRequestSelection,
  ShopifyGdprRequestManager
});
//# sourceMappingURL=ShopifyGdprRequest.js.map
