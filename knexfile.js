module.exports = {

  development: {
    client: 'sqlite3',
    seeds: {
      directory: './server/db/seeds'
    },
    migrations: {
      directory: './server/db/migrations'
    },
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    seeds: {
      directory: './server/db/seeds'
    },
    migrations: {
      directory: './server/db/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: './server/db/seeds'
    },
    migrations: {
      directory: './server/db/migrations',
      tableName: 'knex_migrations'
    }
  }

}
