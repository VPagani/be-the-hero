import * as Knex from "knex";
import { Knex as configuration } from "../config";

export default Knex(configuration.development);