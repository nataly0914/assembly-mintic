//importar librerias
var express = require('express');
var mongoose = require('mongoose');
const cors = require("cors");
var app = express();
require("dotenv").config();

const productsRoutes = require("./routes/productos");
const usuarioRoutes = require("./routes/usuarios");
const ventaRoutes = require("./routes/ventas");
const userRoutes = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/*conexión a la base de datos en MongoDB con mongoose
mongoose.connect(
    "mongodb+srv://dbUser:SBDrrjnO7RC4B1Rm@cluster0.xifqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
   console.log("Estamos conectados");
  });
*/

//conexión a la base de datos en MongoDB con mongoose (para Heroku)
mongoose.connect(
  process.env.MONGODB_CONNECT).then(() => {
    console.log("Estamos conectados");
});


//Definición y organización de rutas
app.use("/api/productos", productsRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/ventas", ventaRoutes);
app.use("/api/user", userRoutes);

//permite llamar al server
module.exports = app;