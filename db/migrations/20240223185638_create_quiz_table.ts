import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('quiz', (table) => {
    table.uuid('id').primary()
    table.uuid('user_id').index().references('id').inTable('users').onDelete('SET NULL')
    table.string('title').notNullable()
    table.string('description')
    table.string('type').notNullable().unique()
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })
}


export async function down(knex: Knex): Promise<void> {}

