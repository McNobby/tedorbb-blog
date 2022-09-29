require("cross-fetch/polyfill");
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["dev.pb.teobb.no"],
  },
  env: {
    DB_URL: process.env.DB_URL,
    PAGE_NAME: process.env.PAGE_NAME,
  },
};
