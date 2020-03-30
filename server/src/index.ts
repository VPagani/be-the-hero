import * as Express from "express";
import * as cors from "cors";
import type { AddressInfo } from "net";

import { routes } from "./routes";

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(routes);

const server = app.listen(process.env.PORT || 3333, () => {
    let { address, port } = server.address() as AddressInfo;

    if (address === "::") address = "localhost";

    console.log(`Listening on http://${address}:${port}`); 
});