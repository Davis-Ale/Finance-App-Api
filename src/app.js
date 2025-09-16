import express from "express";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

export default app;
