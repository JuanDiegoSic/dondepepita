const express = require("express");
const router = express.Router();
const AlmacenController = require("../controllers/almacen");


router.post("/registerAlmacen", AlmacenController.registerAlmacen);

router.get("/listAlmacen", AlmacenController.listAlmacen);

module.exports = router;