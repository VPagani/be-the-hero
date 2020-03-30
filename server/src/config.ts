import { Config as KnexConfig } from "knex";

export const Knex: Record<"development", KnexConfig> = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./db.sqlite"
        },
        migrations: {
            directory: "./src/database/migrations",
        },
        useNullAsDefault: true
    }
};