const Venta = require("../models/ventas");
// listar ventas
exports.getVenta = (req, res) => {
    Venta.find().then((ventaResult) => {
      res.status(200).json(ventaResult);
    })
  };

// crear ventas
exports.addVenta = (req, res) => {
    const ventaAdd = new Venta({
      nombreVendedor: req.body.nombreVendedor,
      nombreCliente: req.body.nombreCliente,
      idCliente: req.body.idCliente,
      fechaPago: req.body.fechaPago,
      idProductos: req.body.idProductos,
      productos: req.body.productos,
      marca: req.body.marca,
      modelo: req.body.modelo,
      cantidad: req.body.cantidad,
      precioUnitario: req.body.precioUnitario,
      valorTotal: req.body.valorTotal,
    });
  
    ventaAdd.save().then((createdVenta) => {
        console.log(createdVenta);
        res.status(201).json("Creado satisfactoriamente");
      });
    };
//buscar usuario por id
exports.getVentaId = (req, res) => {
    Venta.findById(req.params.id).then((ventaResult) => {
      if (ventaResult) {
        res.status(200).json(ventaResult);
      } 
      else {
        res.status(404).json("Usuario no encontrado");
      }
    });
};
//editar venta  
exports.editVenta = (req, res) => {
  console.log("Editado");
  const id = req.params.id;

  const ventasUpd = new Venta({
    _id: id,
      nombreVendedor: req.body.nombreVendedor,
      nombreCliente: req.body.nombreCliente,
      idCliente: req.body.idCliente,
      fechaPago: req.body.fechaPago,
      idProductos: req.body.idProductos,
      productos: req.body.productos,
      marca: req.body.marca,
      modelo: req.body.modelo,
      cantidad: req.body.cantidad,
      precioUnitario: req.body.precioUnitario,
      valorTotal: req.body.valorTotal,
      // estado: req.body.estado,
  });
  console.log(ventasUpd);

  Venta.findByIdAndUpdate(id, ventasUpd).then((productoResult) => {
    res.status(200).json("Venta actualizada satisfactoriamente");
  });
  };
  //eliminar venta
exports.deleteVenta = (req, res) => {
  console.log("Eliminado");
  const id = req.params.id;

  Venta.deleteOne({_id: id}).then((productoResult) => {
    res.status(200).json("Producto eliminado satisfactoriamente");
  });
}; 

//buscar venta por nombre de cliente
exports.findVenta = (req, res) => {
  const name = req.params.name;
  Venta.find({title: { $regex: ".*" + name + ".*"}}).then((ventas) => {
    res.status(200).json(ventas);
  });
};