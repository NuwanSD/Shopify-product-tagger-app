import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, AllowedTag } from "@gadget-client/automated-product-tagger-app";
import { Select } from "@gadgetinc/api-client-core";
export declare type DefaultAllowedTagServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly keyword: true;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `allowedTag` model. */
export interface CreateAllowedTagActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `allowedTag` record this action is operating on.
  */
    record: GadgetRecord<Select<AllowedTag, DefaultAllowedTagServerSelection>>;
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
/** All the data passed to an effect or precondition within the `update` action on the `allowedTag` model. */
export interface UpdateAllowedTagActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `allowedTag` record this action is operating on.
  */
    record: GadgetRecord<Select<AllowedTag, DefaultAllowedTagServerSelection>>;
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
/** All the data passed to an effect or precondition within the `delete` action on the `allowedTag` model. */
export interface DeleteAllowedTagActionContext extends AmbientContext {
    /**
  * The model of the record this action is operating on
  */
    model: NotYetTyped;
    /**
  * The `allowedTag` record this action is operating on.
  */
    record: GadgetRecord<Select<AllowedTag, DefaultAllowedTagServerSelection>>;
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
