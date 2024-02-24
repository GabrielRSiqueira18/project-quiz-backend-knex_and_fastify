import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('questions', (table) => {
    table.uuid('id').primary()
    table.string('title').notNullable().unique()
    table.string('description').notNullable()
    table.string('type').notNullable()
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('questions')
}

