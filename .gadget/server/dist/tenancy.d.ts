export declare const AppTenancyKey: unique symbol;
export declare type AppTenant = Partial<{
    shopify: Pick<ShopifyTenant, "shopId">;
}>;
export declare type AppTenancy = Partial<{
    shopify: ShopifyTenant;
}>;
declare type ShopifyTenant = {
    shopId: bigint;
    domain: string;
    accessToken: string;
    apiVersion: string;
};
export {};
