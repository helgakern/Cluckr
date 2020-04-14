// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "clucker",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
  },
};
