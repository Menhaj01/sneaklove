const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const SneakerModel = require("./../models/Sneaker");

/* router.get("/", (req, res, next) => { */
/*   res.render("products", tags, sneakers); */
/* }); */
router.get("/", async (req, res, next) => {
  try {
    const sneakers = await SneakerModel.find();
    res.render("products", { sneakers });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
