const { request } = require("express");
const Almacen = require("../models/almacen");

const registerAlmacen = async (req, res) => {
  if (!req.body.name || !req.body.direccion)
    return res.status(401).send("Process failer: Imcomplete data");

  const existingAlmacen = await Almacen.findOne({
    name: req.body.name,
  });
  if (existingAlmacen)
    return res.status(401).send("Process failed: role alredy exist");

  const almacen = new Almacen({
    name: req.body.name,
    direccion: req.body.direccion,
    ciudad: req.body.ciudad
  });

  const result = await almacen.save();
  if (!result) return res.status(401).send("Failed to register role");
  return res.status(200).send({ almacen });
};

const listAlmacen = async (req, res) => {
    const almacen = await Almacen.find()
    if ((!almacen)) return res.status(401).send("No Almacen");
    return res.status(200).send({almacen})
};

module.exports = { registerAlmacen, listAlmacen };
