import { randomBytes } from "crypto";

export default function generateUniqueId() {
    return randomBytes(4).toString("hex");
}