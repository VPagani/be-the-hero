import * as Knex from "knex";

export const up = (knex: Knex) =>
    knex.schema.createTable("incidents", t => {
        t.increments().primary();

        t.string("title").notNullable();
        t.string("description").notNullable();
        t.decimal("value").notNullable();

        t.string("ong_id").notNullable()
            .references("id").inTable("ongs");
    })
;

export const down = (knex: Knex) =>
    knex.schema.dropTable("ongs")
;