//AQUI VA TODA LA LÓGICA

//importar el modelo
const Producto = require("../models/productos");

//listar productos
exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  })
};

//crear productos
exports.addProduct = (req, res) => {
  const productoAdd = new Producto({
    title: req.body.title,
    marca: req.body.marca,
    modelo: req.body.modelo,
    cilindraje: req.body.cilindraje,
    categoria: req.body.categoria,
    disponible: req.body.disponible,
    valorUnitario: req.body.valorUnitario,
  });

  productoAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Creado satisfactoriamente");    res.status(500).json({err: error});
  });
};

//listar productos por id
exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } 
    else {
      res.status(404).json("Producto no encontrado");
    }
  });
};

//listar productos disponibles
exports.getProductoDisponible = (req, res) => {
  Producto.find({ disponible: true }).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

//eliminar producto
exports.deleteProducto = (req, res) => {
  console.log("Eliminado");
  const id = req.params.id;

  Producto.deleteOne({_id: id}).then((productoResult) => {
    res.status(200).json("Producto eliminado satisfactoriamente");
  });
}; 

//editar producto  
exports.editProduct = (req, res) => {
  console.log("Editado");
  const id = req.params.id;

  const productoUpd = new Producto({
    _id: id,
    title: req.body.title,
    marca: req.body.marca,
    modelo: req.body.modelo,
    cilindraje: req.body.cilindraje,
    categoria: req.body.categoria,
    disponible: req.body.disponible,
    valorUnitario: req.body.valorUnitario,
  });
  console.log(productoUpd);

  Producto.findByIdAndUpdate(id, productoUpd).then((productoResult) => {
    res.status(200).json("Producto actualizado satisfactoriamente");
  });
};

//buscar producto por nombre
exports.findProduct = (req, res) => {
  const name = req.params.name;
  Producto.find({title: { $regex: ".*" + name + ".*"}}).then((productos) => {
    res.status(200).json(productos);
  });
};
