import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import * as SessionController from "./controllers/SessionController";
import * as OngController from "./controllers/OngController";
import * as IncidentController from "./controllers/IncidentController";
import * as ProfileController from "./controllers/ProfileController";

export const routes = Router();

routes.post("/sessions", celebrate({
    body: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create);

routes.get("/ongs", OngController.index);

routes.post("/ongs", celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().regex(/^\d{10,11}$/),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get("/profile", celebrate({
    headers: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

routes.get("/incidents", celebrate({
    query: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);

routes.post("/incidents", celebrate({
    headers: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    body: Joi.object().keys({
        title: Joi.string().required().min(5),
        description: Joi.string().required(),
        value: Joi.number().positive().required()
    })
}), IncidentController.create);

routes.delete("/incidents/:id", celebrate({
    headers: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    params: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.remove);