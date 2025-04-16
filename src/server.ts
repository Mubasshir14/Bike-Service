import { Server } from "http";
import app from "./app";

const port = 5000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`BIKE SERVICE SERVER IS RUNNING ON PORT: ${port}`);
  });
}
main();
