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
var AllowedTag_exports = {};
__export(AllowedTag_exports, {
  AllowedTagManager: () => AllowedTagManager,
  DefaultAllowedTagSelection: () => DefaultAllowedTagSelection
});
module.exports = __toCommonJS(AllowedTag_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultAllowedTagSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "keyword": true
};
;
;
;
;
;
;
;
;
async function createAllowedTag(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "allowedTag";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await (0, import_api_client_core.actionRunner)(
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
        type: "CreateAllowedTagInput"
      }
    },
    options,
    null
  );
}
async function deleteAllowedTag(id, options) {
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      }
    },
    options,
    null
  );
}
async function updateAllowedTag(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "allowedTag";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      },
      "allowedTag": {
        value: newVariables.allowedTag,
        required: false,
        type: "UpdateAllowedTagInput"
      }
    },
    options,
    null
  );
}
class AllowedTagManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many allowedTag. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "allowedTags",
          DefaultAllowedTagSelection,
          "allowedTag",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "allowedTags",
        modelApiIdentifier: "allowedTag",
        defaultSelection: DefaultAllowedTagSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "allowedTags",
          DefaultAllowedTagSelection,
          "allowedTag",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "allowedTags",
        modelApiIdentifier: "allowedTag",
        defaultSelection: DefaultAllowedTagSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one allowedTag by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.create = Object.assign(
      createAllowedTag,
      {
        type: "action",
        operationName: "createAllowedTag",
        namespace: null,
        modelApiIdentifier: "allowedTag",
        modelSelectionField: "allowedTag",
        isBulk: false,
        defaultSelection: DefaultAllowedTagSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "allowedTag": {
            required: false,
            type: "CreateAllowedTagInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deleteAllowedTag,
      {
        type: "action",
        operationName: "deleteAllowedTag",
        namespace: null,
        modelApiIdentifier: "allowedTag",
        modelSelectionField: "allowedTag",
        isBulk: false,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: false,
        isCreateOrUpdateAction: false,
        paramOnlyVariables: []
      }
    );
    /**
    * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
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
              type: "[GadgetID!]"
            }
          },
          options,
          null
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteAllowedTags",
        namespace: null,
        modelApiIdentifier: "allowedTag",
        modelSelectionField: "allowedTags",
        isBulk: true,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        }
      }
    );
    this.update = Object.assign(
      updateAllowedTag,
      {
        type: "action",
        operationName: "updateAllowedTag",
        namespace: null,
        modelApiIdentifier: "allowedTag",
        modelSelectionField: "allowedTag",
        isBulk: false,
        defaultSelection: DefaultAllowedTagSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "allowedTag": {
            required: false,
            type: "UpdateAllowedTagInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AllowedTagManager,
  DefaultAllowedTagSelection
});
//# sourceMappingURL=AllowedTag.js.map
