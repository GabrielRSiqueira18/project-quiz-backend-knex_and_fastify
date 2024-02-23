import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
	client: "pg",
  connection: {
    database: 'quiz-knex',
    user: 'postgres',
    password: 'docker',
    port: 5432,
    host: 'localhost'
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
}

export const knex = setupKnex(config)