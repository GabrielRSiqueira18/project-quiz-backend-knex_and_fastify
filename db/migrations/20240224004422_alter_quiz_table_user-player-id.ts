import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('quiz', (table) => {
  table.uuid('user_played_id').references('id').inTable('users').index().onDelete('SET NULL')
  })
}


export async function down(knex: Knex): Promise<void> {
  
}

