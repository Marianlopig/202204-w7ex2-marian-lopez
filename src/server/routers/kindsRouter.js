const express = require("express");
const { getKinds } = require("../contollers/kindsControllers/kindsControllers");

const kindsRouter = express.Router();

kindsRouter.get("/list", getKinds);

module.exports = { kindsRouter };
