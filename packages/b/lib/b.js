'use strict';

const axios = require("axios")

module.exports = b;

async function b() {
  const response = await axios.get("https://api.github.com/users");
  return response.data;
}
