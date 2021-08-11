const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Producto = require("./routes/producto");
const Almacen = require("./routes/almacen");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/producto", Producto);
app.use("/api/almacen", Almacen);

app.listen(process.env.PORT, () =>
  console.log("Backend server running OK, on port: ", process.env.PORT)
);

dbConnection();
