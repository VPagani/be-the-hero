import type { Handler } from "express";

import db from "../database/connection";

export const index: Handler = async (req, res) => {
    const { page = "1" } = req.params;

    const [count] = await db("incidents").count();

    const incidents = await db("incidents")
        .join("ongs", "ongs.id", "=", "incidents.ong_id")
        .limit(5)
        .offset((parseInt(page) - 1) * 5)
        .select([
            "incidents.*",
            "ongs.name",
            "ongs.email",
            "ongs.whatsapp",
            "ongs.city",
            "ongs.uf"
        ])
    ;
    
    res.header("X-Total-Count", count["count(*)"]);

    return res.json(incidents);
};

export const create: Handler = async (req, res) => {
    const ong_id = req.headers.authorization;
    const { title, description, value } = req.body;

    const [id] = await db("incidents").insert({ title, description, value, ong_id });

    return res.json({ id });
};

export const remove: Handler = async (req, res) => {
    const ong_id = req.headers.authorization;
    const { id } = req.params;

    const incident = await db("incidents")
        .where("id", id)
        .select("ong_id")
        .first()
    ;

    if (incident.ong_id !== ong_id)
        return res.status(401).json({ error: "Operation not allowed" });

    await db("incidents").where("id", id).delete();

    return res.status(204).send();
};