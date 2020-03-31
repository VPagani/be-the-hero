import * as Express from "express";
import * as cors from "cors";
import { errors } from "celebrate";

import { routes } from "./routes";

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(routes);
app.use(errors());

export default app;