import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

const configViewEngine = (app) => {
  app.use(express.static("./public"));
  app.set("view engine", "ejs");
  app.set("views", "./views");
  app.use(expressEjsLayouts);
  app.set("layout", "./layouts/master");
};

export default configViewEngine;
