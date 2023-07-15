import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyShop, ShopifyShopSort, ShopifyShopFilter, AvailableShopifyShopSelection } from "../types.js";
export declare const DefaultShopifyShopSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly state: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly accessToken: true;
    readonly address1: true;
    readonly address2: true;
    readonly checkoutApiSupported: true;
    readonly city: true;
    readonly cookieConsentLevel: true;
    readonly country: true;
    readonly countryCode: true;
    readonly countryName: true;
    readonly countyTaxes: true;
    readonly shopifyCreatedAt: true;
    readonly currency: true;
    readonly customerEmail: true;
    readonly domain: true;
    readonly eligibleForCardReaderGiveaway: true;
    readonly eligibleForPayments: true;
    readonly email: true;
    readonly enabledPresentmentCurrencies: true;
    readonly finances: true;
    readonly forceSsl: true;
    readonly googleAppsDomain: true;
    readonly googleAppsLoginEnabled: true;
    readonly grantedScopes: true;
    readonly hasDiscounts: true;
    readonly hasGiftCards: true;
    readonly hasStorefront: true;
    readonly ianaTimezone: true;
    readonly installedViaApiKey: true;
    readonly latitude: true;
    readonly longitude: true;
    readonly marketingSmsContentEnabledAtCheckout: true;
    readonly moneyFormat: true;
    readonly moneyInEmailsFormat: true;
    readonly moneyWithCurrencyFormat: true;
    readonly moneyWithCurrencyInEmailsFormat: true;
    readonly multiLocationEnabled: true;
    readonly myshopifyDomain: true;
    readonly name: true;
    readonly passwordEnabled: true;
    readonly phone: true;
    readonly planDisplayName: true;
    readonly planName: true;
    readonly preLaunchEnabled: true;
    readonly primaryLocale: true;
    readonly province: true;
    readonly provinceCode: true;
    readonly registeredWebhooks: true;
    readonly requiresExtraPaymentsAgreement: true;
    readonly setupRequired: true;
    readonly shopOwner: true;
    readonly source: true;
    readonly taxShipping: true;
    readonly taxesIncluded: true;
    readonly timezone: true;
    readonly transactionalSmsDisabled: true;
    readonly shopifyUpdatedAt: true;
    readonly weightUnit: true;
    readonly zipCode: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyShop". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export declare type SelectedShopifyShopOrDefault<Options extends Selectable<AvailableShopifyShopSelection>> = DeepFilterNever<Select<ShopifyShop, DefaultSelection<AvailableShopifyShopSelection, Options, typeof DefaultShopifyShopSelection>>>;
/** Options that can be passed to the `ShopifyShopManager#findOne` method */
export interface FindOneShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
}
/** Options that can be passed to the `ShopifyShopManager#maybeFindOne` method */
export interface MaybeFindOneShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
}
/** Options that can be passed to the `ShopifyShopManager#findMany` method */
export interface FindManyShopifyShopsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyShopSort | ShopifyShopSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyShopFilter | ShopifyShopFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyShopManager#findFirst` method */
export interface FindFirstShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyShopSort | ShopifyShopSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyShopFilter | ShopifyShopFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyShopManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyShopSort | ShopifyShopSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyShopFilter | ShopifyShopFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyShop" */
export declare class ShopifyShopManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyShop by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyShopOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyShopOptions>): Promise<GadgetRecord<SelectedShopifyShopOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyShop";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: FindOneShopifyShopOptions;
        schemaType: Query["shopifyShop"];
    };
    /**
 * Finds one shopifyShop by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyShopOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyShopOptions>): Promise<GadgetRecord<SelectedShopifyShopOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyShop";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: MaybeFindOneShopifyShopOptions;
        schemaType: Query["shopifyShop"];
    };
    /**
 * Finds many shopifyShop. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyShopsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyShopsOptions>): Promise<GadgetRecordList<SelectedShopifyShopOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyShops";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: FindManyShopifyShopsOptions;
        schemaType: Query["shopifyShop"];
    };
    /**
 * Finds the first matching shopifyShop. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyShopOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyShopOptions>): Promise<GadgetRecord<SelectedShopifyShopOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyShops";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: FindFirstShopifyShopOptions;
        schemaType: Query["shopifyShop"];
    };
    /**
 * Finds the first matching shopifyShop. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyShopOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyShopOptions>): Promise<GadgetRecord<SelectedShopifyShopOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyShops";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: MaybeFindFirstShopifyShopOptions;
        schemaType: Query["shopifyShop"];
    };
}
