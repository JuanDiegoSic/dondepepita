const express = require("express");
const router = express.Router();
const ProductoController = require("../controllers/producto");


router.post("/registerProducto", ProductoController.registerProducto);

router.get("/listProducto", ProductoController.listProducto);

module.exports = router;