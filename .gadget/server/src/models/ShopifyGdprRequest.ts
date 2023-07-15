// All the generated types for the "Shopify GDPR Request" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyGdprRequest } from "@gadget-client/automated-product-tagger-app";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyGdprRequestServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly payload: true;
      readonly topic: true;
      readonly shopId: true;
    readonly shop: false;
  };

  /** All the data passed to an effect or precondition within the `create` action on the `shopifyGdprRequest` model. */
export interface CreateShopifyGdprRequestActionContext extends AmbientContext {
  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;
  /**
* The `shopifyGdprRequest` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopifyGdprRequest, DefaultShopifyGdprRequestServerSelection>>;
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


    /** All the data passed to an effect or precondition within the `update` action on the `shopifyGdprRequest` model. */
export interface UpdateShopifyGdprRequestActionContext extends AmbientContext {
  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;
  /**
* The `shopifyGdprRequest` record this action is operating on.
*/
  record: GadgetRecord<Select<ShopifyGdprRequest, DefaultShopifyGdprRequestServerSelection>>;
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


  