import app from "./app";
import type { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3333, () => {
    let { address, port } = server.address() as AddressInfo;

    if (address === "::") address = "localhost";

    console.log(`Listening on http://${address}:${port}`); 
});