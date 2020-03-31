import type { Handler } from "express";

import db from "../database/connection";
import generateUniqueId from "../utils/generateUniqueId";

export const index: Handler = async (req, res) => {
    const ongs = await db("ongs").select("*");
    return res.json(ongs);
};

export const create: Handler = async (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();
    await db("ongs").insert({ id, name, email, whatsapp, city, uf });

    return res.json({ id });
};