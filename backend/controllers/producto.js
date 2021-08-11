const { request } = require("express");
const Producto = require("../models/producto");

const registerProducto = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(401).send("Process failer: Imcomplete data");

  const existingProducto = await Producto.findOne({
    name: req.body.name,
  });
  if (existingProducto)
    return res.status(401).send("Process failed: role alredy exist");

  const producto = new Producto({
    name: req.body.name,
    precio: req.body.precio,
    codigo: req.body.codigo,
    description: req.body.description
  });

  const result = await producto.save();
  if (!result) return res.status(401).send("Failed to register role");
  return res.status(200).send({ producto });
};

const listProducto = async (req, res) => {
    const producto = await Producto.find()
    if ((!producto)) return res.status(401).send("No productos");
    return res.status(200).send({producto})
};

module.exports = { registerProducto,listProducto};
