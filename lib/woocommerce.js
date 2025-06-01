

// lib/woocommerce.js
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const woocommerceApi = new WooCommerceRestApi({
  url: process.env.WOOC_URL,
  consumerKey: process.env.WOO_CONSUMER_KEY,
  consumerSecret: process.env.WOO_SECRET_KEY,
  version: "wc/v3"
});

export default woocommerceApi;
