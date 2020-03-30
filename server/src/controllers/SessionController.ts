import type { Handler } from "express";

import db from "../database/connection";

export const create: Handler = async (req, res) => {
    const { id } = req.body;

    const ong = await db("ongs")
        .where("id", id)
        .select("name")
        .first()
    ;

    if (!ong)
        return res.status(400).json({ error: "No ONG found with this ID" });

    return res.json(ong);
};