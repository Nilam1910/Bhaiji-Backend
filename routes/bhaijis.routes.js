const { application } = require("express")
const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")


router.get("/", ctrls.bhaijis.index)


module.exports = router;
