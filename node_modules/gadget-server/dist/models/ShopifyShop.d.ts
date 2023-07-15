import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyShop } from "@gadget-client/automated-product-tagger-app";
import { Select } from "@gadgetinc/api-client-core";
export declare type DefaultShopifyShopServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly state: true;
    readonly gdprRequests: false;
    readonly products: false;
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
    readonly syncs: false;
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
    readonly allowedTags: false;
};
/** All the data passed to an effect or precondition within the `install` action on the `shopifyShop` model. */
export interface InstallShopifyShopActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `shopifyShop` record this action is operating on.
  */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
    scope: ActionExecutionScope;
    /**
  * An object describing what started this action execution.
  */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
}
/** All the data passed to an effect or precondition within the `update` action on the `shopifyShop` model. */
export interface UpdateShopifyShopActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `shopifyShop` record this action is operating on.
  */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
    scope: ActionExecutionScope;
    /**
  * An object describing what started this action execution.
  */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
}
/** All the data passed to an effect or precondition within the `uninstall` action on the `shopifyShop` model. */
export interface UninstallShopifyShopActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `shopifyShop` record this action is operating on.
  */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
    scope: ActionExecutionScope;
    /**
  * An object describing what started this action execution.
  */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
}
/** All the data passed to an effect or precondition within the `reinstall` action on the `shopifyShop` model. */
export interface ReinstallShopifyShopActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `shopifyShop` record this action is operating on.
  */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
    /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
    scope: ActionExecutionScope;
    /**
  * An object describing what started this action execution.
  */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
}
