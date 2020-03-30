import * as Knex from "knex";

export const up = (knex: Knex) =>
    knex.schema.createTable("ongs", t => {
        t.string("id").primary();
        t.string("name").notNullable();
        t.string("email").notNullable();
        t.string("whatsapp").notNullable();
        t.string("city").notNullable();
        t.string("uf", 2).notNullable();
    })
;

export const down = (knex: Knex) =>
    knex.schema.dropTable("ongs")
;