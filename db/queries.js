const knex = require("./client");

module.exports = {
  getAll() {
    return knex("clucks").select("*").orderBy("createdAt", "desc");
  },
  add(cluck) {
    return knex("clucks").insert(cluck, "*");
  },
};
