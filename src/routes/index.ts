const express = require("express");
const Router = express.Router();

//version one of apis
const RouterV1 = require("./v1");
Router.use("/v1" , RouterV1);


module.exports = Router;
