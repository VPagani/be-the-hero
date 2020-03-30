import { Router } from "express";

import * as SessionController from "./controllers/SessionController";
import * as OngController from "./controllers/OngController";
import * as IncidentController from "./controllers/IncidentController";
import * as ProfileController from "./controllers/ProfileController";

export const routes = Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.remove);