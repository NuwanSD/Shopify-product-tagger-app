/**
* This is the Gadget server side types library for:
*
*      _         _                        _           _   ____                _            _     _____                                _
*     / \  _   _| |_ ___  _ __ ___   __ _| |_ ___  __| | |  _ \ _ __ ___   __| |_   _  ___| |_  |_   _|_ _  __ _  __ _  ___ _ __     / \   _ __  _ __
*    / _ \| | | | __/ _ \| '_ ` _ \ / _` | __/ _ \/ _` | | |_) | '__/ _ \ / _` | | | |/ __| __|   | |/ _` |/ _` |/ _` |/ _ \ '__|   / _ \ | '_ \| '_ \
*   / ___ \ |_| | || (_) | | | | | | (_| | ||  __/ (_| | |  __/| | | (_) | (_| | |_| | (__| |_    | | (_| | (_| | (_| |  __/ |     / ___ \| |_) | |_) |
*  /_/   \_\__,_|\__\___/|_| |_| |_|\__,_|\__\___|\__,_| |_|   |_|  \___/ \__,_|\__,_|\___|\__|   |_|\__,_|\__, |\__, |\___|_|    /_/   \_\ .__/| .__/
*                                                                                                          |___/ |___/                    |_|   |_|
*
* Built for environment `"Development"` at version "85"
* Edit this app here: https://"automated-product-tagger-app".gadget.dev/edit
*/
import { FastifyLoggerInstance } from "fastify";
import type { Client } from "@gadget-client/automated-product-tagger-app";
export * from "./routes";
export * from "./types";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./global-actions";
export * from "./AmbientContext";
export * from "./models/Session";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/AllowedTag";
export * from "./effects";
/**
 * An instance of the Gadget logger
 */
declare let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { logger, api };
