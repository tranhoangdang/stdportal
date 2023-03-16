import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine.js";
import router from "./routes/web.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

configViewEngine(app);
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
