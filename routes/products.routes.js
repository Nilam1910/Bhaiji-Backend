
const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

// do not need the parans after index like ()
router.get("/", ctrls.products.index);
router.post("/", ctrls.products.create);
router.delete("/:id", ctrls.products.destroy);
router.put("/:id", ctrls.products.update);


module.exports = router;
