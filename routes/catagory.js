const express = require("express");
var router1 = express();
const create = require("../controller/catagory");
const view = require("../controller/catagory");


const bodyparser = require("body-parser");

router1.use(bodyparser.json());
router1.post("/", create.create);
router1.get("/", view.view);


module.exports = router1;