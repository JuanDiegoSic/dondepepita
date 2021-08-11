const mongoose = require("mongoose");

const almacenSchema = new mongoose.Schema({
  name: String,
  direccion: String,
  ciudad: String,
});

const almacen = mongoose.model("almacen", almacenSchema);
module.exports = almacen;
