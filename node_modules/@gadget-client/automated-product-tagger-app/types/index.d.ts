/**
* This is the Gadget API client library for:
*
*      _         _                        _           _   ____                _            _     _____                                _
*     / \  _   _| |_ ___  _ __ ___   __ _| |_ ___  __| | |  _ \ _ __ ___   __| |_   _  ___| |_  |_   _|_ _  __ _  __ _  ___ _ __     / \   _ __  _ __
*    / _ \| | | | __/ _ \| '_ ` _ \ / _` | __/ _ \/ _` | | |_) | '__/ _ \ / _` | | | |/ __| __|   | |/ _` |/ _` |/ _` |/ _ \ '__|   / _ \ | '_ \| '_ \
*   / ___ \ |_| | || (_) | | | | | | (_| | ||  __/ (_| | |  __/| | | (_) | (_| | |_| | (__| |_    | | (_| | (_| | (_| |  __/ |     / ___ \| |_) | |_) |
*  /_/   \_\__,_|\__\___/|_| |_| |_|\__,_|\__\___|\__,_| |_|   |_|  \___/ \__,_|\__,_|\___|\__|   |_|\__,_|\__, |\__, |\___|_|    /_/   \_\ .__/| .__/
*                                                                                                          |___/ |___/                    |_|   |_|
*
* Built for environment "Development" at version 84
* API docs: https://docs.gadget.dev/api/automated-product-tagger-app
* Edit this app here: https://automated-product-tagger-app.gadget.dev/edit
*/
export { GadgetConnection, GadgetRecord, GadgetRecordList, GadgetInternalError, GadgetClientError, GadgetOperationError, InvalidRecordError, GadgetValidationError, BrowserSessionStorageType } from "@gadgetinc/api-client-core";
export type { ClientOptions, BrowserSessionAuthenticationModeOptions, InvalidFieldError, AuthenticationModeOptions, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
        };
    }
}
