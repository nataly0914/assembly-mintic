const mongoose = require("mongoose");

const usuario = mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true  },
  // usuario: { type: String, required: true},
  // clave: { type: String, required: true},
  rol: { type: String, required: true},
  activo:{ type: Boolean, required: true},
});

module.exports = mongoose.model("usuarios", usuario);