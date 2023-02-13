
const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

// do not need the parans after index like ()
router.get("/", ctrls.bhaijis.index);
router.post("/", ctrls.bhaijis.create);


module.exports = router;
