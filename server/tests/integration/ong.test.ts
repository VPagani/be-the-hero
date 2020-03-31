import * as request from "supertest";
import app from "../../src/app";
import connection from "../../src/database/connection";

beforeEach(async () => {
    await connection.migrate.latest();
}, 10_000);

afterAll(async () => {
    await connection.destroy();
}, 10_000);

describe("ONG", () => {

    it("should be able to create a new ong", async () => {
        const response = await request(app)
            .post("/ongs")
            .send({
                name: "APAD",
                email: "contato@test.com",
                whatsapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
            });

        expect(response.body).toHaveProperty("id");
        expect(response.body.id).toHaveLength(8);
    });
});