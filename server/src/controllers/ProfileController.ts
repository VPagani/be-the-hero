import type { Handler } from "express";

import db from "../database/connection";

export const index: Handler = async (req, res) => {
    const ong_id = req.headers.authorization;

    const incidents = await db("incidents")
        .where("ong_id", ong_id)
        .select("*")
    ;

    return res.json(incidents);
};