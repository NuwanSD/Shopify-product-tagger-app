import Shopify from "shopify-api-node";
export declare type ShopifyConnectionConfiguration = {
    /**
    * The array of scopes configured for this connection and what Shopify will prompt the user to grant.
    * If the shop records `grantedScopes` value doesn't include all these scopes, a new OAuth grant should be requested.
    */
    requiredScopes: string[];
};
export interface ShopifyConnection {
    /**
    * ID of the shop set up as the current in-context tenant for this context
    */
    currentShopId?: bigint;
    /**
    * Shopify client for the current in context shop or record
    * @type {Shopify | undefined}
    */
    current?: Shopify;
    /**
    * Configuration of the shopify connection
    **/
    configuration: ShopifyConnectionConfiguration;
    /**
    * @deprecated Use forShopId or forShopDomain instead
    * @param {string} remoteIdentifier The Shopify domain
    * @returns {Shopify} Shopify Client
    */
    forShop: (remoteIdentifier: string) => Shopify;
    /**
    * @param {bigint} shopId Shop ID from the Shop model
    * @returns {Promise<Shopify>} Promise which resolves to a Shopify Client
    */
    forShopId: (shopId: bigint | string) => Promise<Shopify>;
    /**
    * @param {string} shopDomain The Shopify domain
    * @returns {Promise<Shopify>} Promise which resolves to a Shopify Client
    */
    forShopDomain: (shopDomain: string) => Promise<Shopify>;
    /**
    * @param {bigint} shopId to set for the current context
    * @returns {Promise<void>} Resolves when the shop context has been updated
    **/
    setCurrentShop: (shopId: bigint) => Promise<void>;
}
/**
 * A map from connection name to instantiated connection object for all the connections in <%= applicationName %>
 */
export interface AppConnections {
    /** An instantiated API client object for the Shopify connection. */
    "shopify": ShopifyConnection;
}
