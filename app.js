import express from "express";
import routes from "./src/routes.js";
const app = express();
const port = 8080;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Mountain Horses API listening on port ${port}`);
});
