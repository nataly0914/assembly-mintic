//importar mongoose
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const producto = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  marca: { type: String, required: true  },
  modelo: { type: Number, required: true},
  cilindraje: { type: Number, required: true},
  categoria: { type: String, required: true},
      //type: mongoose.Schema.Types.ObjectId,
      //ref: "Categoria",
      //required: true,
  disponible: { type: Boolean, required: true },
  valorUnitario: { type: Number, required: true },
});

producto.plugin(uniqueValidator);

module.exports = mongoose.model("Producto", producto);