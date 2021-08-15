const express = require("express");
var router = express();
const create = require("../controller/products");
const view = require("../controller/products");
const singleView = require("../controller/products");
const update = require("../controller/products");
const distroy = require("../controller/products");


const bodyparser = require("body-parser");

router.use(bodyparser.json());
router.post("/", create.create);
router.get("/", view.view);
router.get("/:id", singleView.singleView);
router.patch("/:id", update.update);
router.delete("/:id", distroy.distroy);


module.exports = router;