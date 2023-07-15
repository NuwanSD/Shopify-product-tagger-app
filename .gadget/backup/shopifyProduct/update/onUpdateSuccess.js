/**
 * Effect code for update on Shopify Product
 * @param { import("gadget-server").UpdateShopifyProductActionContext } context - Everything for running this effect, like the api client, current record, params, etc. More on effect context: https://docs.gadget.dev/guides/extending-with-code#effect-context
 */
module.exports = async ({ api, record, params, logger, connections }) => {
  // access the shopifyProduct record's data with the record object
  // console.log(record.id)

  // make an API call to Shopify with the connections.shopify object
  // console.log(await connections.shopify.current.shop.get())

  // update model fields on the current record or other models with the api object
  // await api.internal.shopifyProduct.update(record.id, { shopifyProduct: { ... } });

  // make API calls to other systems with libraries from npm
  // make sure to first add axios as a dependency in your package.json
  // const axios = require("axios");
  // await axios.post("https://some-other-api.com/v1/api", { body: record.toJSON() });
};
