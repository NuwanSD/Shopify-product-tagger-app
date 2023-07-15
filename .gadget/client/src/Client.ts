import type { OperationContext } from "@urql/core";
import { GadgetConnection, GadgetTransaction, InternalModelManager } from "@gadgetinc/api-client-core";
import type { ClientOptions as ApiClientOptions, AnyClient } from '@gadgetinc/api-client-core';
import type { DocumentNode } from 'graphql';
import type {
  Scalars,
} from "./types";
import { SessionManager } from "./models/Session.js";
import { ShopifyGdprRequestManager } from "./models/ShopifyGdprRequest.js";
import { ShopifyProductManager } from "./models/ShopifyProduct.js";
import { ShopifyShopManager } from "./models/ShopifyShop.js";
import { ShopifySyncManager } from "./models/ShopifySync.js";
import { AllowedTagManager } from "./models/AllowedTag.js";
import { CurrentSessionManager } from "./models/CurrentSession.js";
import { globalActionRunner } from "@gadgetinc/api-client-core";

type InternalModelManagers = {
  session: InternalModelManager;
  shopifyGdprRequest: InternalModelManager;
  shopifyProduct: InternalModelManager;
  shopifyShop: InternalModelManager;
  shopifySync: InternalModelManager;
  allowedTag: InternalModelManager;
};

type ClientOptions = Omit<ApiClientOptions, "environment"> & { environment?: string };
const productionEnv = "production";
const developmentEnv = "development";

/**
 * Return the implicit environment
 * We specifically use the string `process.env.NODE_ENV` so that bundlers like webpack or vite can string replace this value in built source codes with the user's desired value.
 * In browsers or other environments, `process` may be undefined, so we catch any errors and return undefined.
 */
const getImplicitEnv = () => {
  try {
    return process.env.NODE_ENV
  } catch (error) {
    return undefined;
  }
}

/**
 * Root object used for interacting with the "Automated Product Tagger App" API. `Client` has `query` and `mutation` functions for executing raw GraphQL queries and mutations, as well as `ModelManager` objects for manipulating models with a JavaScript API. Client also wraps a `connection`, which implements the transport layer if you need access to that.
 * */
export class Client implements AnyClient {
  connection: GadgetConnection;

  session: SessionManager;
  shopifyGdprRequest: ShopifyGdprRequestManager;
  shopifyProduct: ShopifyProductManager;
  shopifyShop: ShopifyShopManager;
  shopifySync: ShopifySyncManager;
  allowedTag: AllowedTagManager;
  currentSession: CurrentSessionManager;

  /**
  * Namespaced object for accessing models via the Gadget internal APIs, which provide lower level and higher privileged operations directly against the database. Useful for maintenance operations like migrations or correcting broken data, and for implementing the high level actions.
  *
  * Returns an object of model API identifiers to `InternalModelManager` objects.
  *
  * Example:
  * `api.internal.user.findOne(...)`
  */
  internal: InternalModelManagers;

  developmentApiRoot = "https://automated-product-tagger-app--development.gadget.app/";
  productionApiRoot = "https://automated-product-tagger-app.gadget.app/";
  applicationId = "47518";

  constructor(options?: ClientOptions) {
    const environment = options?.environment ?? getImplicitEnv() ?? developmentEnv;
    let normalizedEnvironment = environment.toLocaleLowerCase();

    if (normalizedEnvironment != developmentEnv && normalizedEnvironment != productionEnv) {
      console.warn("Invalid environment", environment, "defaulting to development");
      normalizedEnvironment = developmentEnv;
    }

    this.connection = new GadgetConnection({
      endpoint: new URL("api/graphql", normalizedEnvironment == productionEnv ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode ?? (typeof window == 'undefined' ? { anonymous: true } : { browserSession: true }),
      ...options,
      environment: normalizedEnvironment == productionEnv ? "Production" : "Development"
    })

    this.session = new SessionManager(this.connection);
    this.shopifyGdprRequest = new ShopifyGdprRequestManager(this.connection);
    this.shopifyProduct = new ShopifyProductManager(this.connection);
    this.shopifyShop = new ShopifyShopManager(this.connection);
    this.shopifySync = new ShopifySyncManager(this.connection);
    this.allowedTag = new AllowedTagManager(this.connection);
    this.currentSession = new CurrentSessionManager(this.connection);

    this.internal = {
      session: new InternalModelManager("session", this.connection, {
      	pluralApiIdentifier: "sessions",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, {
      	pluralApiIdentifier: "shopifyGdprRequests",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, {
      	pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyShop: new InternalModelManager("shopifyShop", this.connection, {
      	pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifySync: new InternalModelManager("shopifySync", this.connection, {
      	pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      allowedTag: new InternalModelManager("allowedTag", this.connection, {
      	pluralApiIdentifier: "allowedTags",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
    };
  }


  /** Executes the globalShopifySync global action. */
globalShopifySync: {
  (
  ): Promise<any>;
  type: "globalAction",
  operationName: "globalShopifySync",
  namespace: null,
  variablesType: Record<string, never>;
  variables: {
  }
} = Object.assign(
  async (
  ): Promise<any> => {
    return (await globalActionRunner(
      this.connection,
      "globalShopifySync",
      {
      },
      null
    ));
  },
  {
    type: "globalAction",
    operationName: "globalShopifySync",
    namespace: null,

    variablesType: {} as Record<string, never>,

    variables: {
    },
  } as const
);


  /** Run an arbitrary GraphQL query. */
  async query(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>) {
    const {data, error} = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error) throw error
    return data;
  }

  /** Run an arbitrary GraphQL mutation. */
  async mutate(graphQL: string | DocumentNode, variables?: Record<string, any>) {
    const {data, error} = await this.connection.currentClient.mutation(graphQL, variables).toPromise();
    if (error) throw error
    return data;
  }

  /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
  transaction = async <T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T> => {
    return await this.connection.transaction(callback)
  }

  /**
   * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
   *
   * @example
   * await api.fetch("https://myapp--development.gadget.app/foo/bar");
   *
   * @example
   * // fetch a relative URL from the endpoint this API client is configured to fetch from
   * await api.fetch("/foo/bar");
   **/
  async fetch(input: RequestInfo | URL, init: RequestInit = {}) {
    return await this.connection.fetch(input, init);
  }

  /**
  * Get a new direct upload token for file uploads to directly to cloud storage.
  * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
  * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
  */
  getDirectUploadToken = async (): Promise<{url: string, token: string}> => {
    const result = await this.query(`query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }`, {nonce: Math.random().toString(36).slice(2, 7)}, {
      requestPolicy: "network-only",
    });
    return result.gadgetMeta.directUploadToken;
  }

  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }

  toJSON() {
    return this.toString()
  }
}
