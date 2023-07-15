import { Client } from "@gadget-client/automated-product-tagger-app";

export const api = new Client({ environment: window.gadgetConfig.environment });
