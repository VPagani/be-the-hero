import * as Knex from "knex";
import { Knex as configuration } from "../config";

type ENV = "development" | "test";
const env = process.env.NODE_ENV as ENV ?? "development";

export default Knex(configuration[env]);