import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  knex.schema.alterTable('quiz', (table) => {
    table.uuid('user_played_id').after('id').index()
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('quiz', (table) => {
		table.dropColumn('user_played_id')
	})
}

