/**
 * Effect code for Create on Shopify Product
 * @param { import("gadget-server").CreateShopifyProductActionContext } context - Everything for running this effect, like the api client, current record, params, etc
 */
module.exports = async ({ api, record, params, logger, connections }) => {
  if (record.id && record.body && record.changed("body")) {
    // get a unique list of words used in the record's description
    const newTags = [...new Set(record.body.match(/\w+(?:'\w+)*/g))];

    // filter down to only those words which are allowed
    const allowedTags = (await api.allowedTag.findMany()).map((tag) => tag.keyword);
    // merge with any existing tags and use Set to remove duplicates
    const finalTags = [
      ...new Set(
        newTags.filter((tag) => allowedTags.includes(tag)).concat(record.tags)
      ),
    ];
    logger.info(
      { newTags, allowedTags, finalTags },
      `applying final tags to product ${record.id}`
    );

    // write tags back to Shopify
    const shopify = await connections.shopify.current;
    if (shopify) {
      await shopify.product.update(parseInt(record.id), {
        tags: finalTags.join(","),
      });
    }
  }
};