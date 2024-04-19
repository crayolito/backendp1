import bodyParser from "body-parser";
import cors from "cors";
import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";
const serve = new Server();

// Body Parse
serve.app.use(bodyParser.urlencoded({ extended: true }));
serve.app.use(bodyParser.json());

// Cors
serve.app.use(cors({ origin: true, credentials: true }));

serve.app.use("/", router);

serve.start(() => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
