const express = require("express");
const Router = express.Router();

//Api
const AuthRouter = require("./auth");
Router.use("/auth" , AuthRouter);

module.exports = Router;
