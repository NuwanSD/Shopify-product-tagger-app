// All the generated types for the "Shopify Sync" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifySync } from "@gadget-client/automated-product-tagger-app";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifySyncServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly state: true;
      readonly errorMessage: true;
      readonly domain: true;
      readonly errorDetails: true;
      readonly syncSince: true;
      readonly force: true;
      readonly models: true;
      readonly shopId: true;
    readonly shop: false;
  };

  /** All the data passed to an effect or precondition within the `run` action on the `shopifySync` model. */
export interface RunShopifySyncActionContext extends AmbientContext {
  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;
  /**
* The `shopifySync` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
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
};


    /** All the data passed to an effect or precondition within the `complete` action on the `shopifySync` model. */
export interface CompleteShopifySyncActionContext extends AmbientContext {
  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;
  /**
* The `shopifySync` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
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
};


    /** All the data passed to an effect or precondition within the `error` action on the `shopifySync` model. */
export interface ErrorShopifySyncActionContext extends AmbientContext {
  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;
  /**
* The `shopifySync` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
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
};


  