import { Config as KnexConfig } from "knex";

export const Knex: Record<"development" | "test", KnexConfig> = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./db.sqlite"
        },
        migrations: {
            directory: "./src/database/migrations",
        },
        useNullAsDefault: true
    },

    test: {
        client: "sqlite3",
        connection: {
            filename: "./db.test.sqlite"
        },
        migrations: {
            directory: "./src/database/migrations",
        },
        useNullAsDefault: true
    }
};