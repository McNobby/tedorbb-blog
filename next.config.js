require("cross-fetch/polyfill");
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["pb-dev.teobb.no"],
  },
  env: {
    DB_URL: process.env.DB_URL,
  },
};
