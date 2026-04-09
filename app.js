import express from "express";
import routes from "./src/routes.js";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use("/v1/", routes);

app.listen(port, () => {
  console.log(`Mountain Horses API listening on port ${port}`);
});
