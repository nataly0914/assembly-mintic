const express = require("express");
const router = express.Router();
const auth = require ("../middleware/auth");

const VentaController = require("../controllers/ventas");

//lista todos las ventas
router.get("", VentaController.getVenta);
//crea las ventas
router.post("",auth,  VentaController.addVenta);
//busca los ventas por id
router.get("/:id", VentaController.getVentaId);
//Actualizar Venta
router.put("/:id",auth, VentaController.editVenta);
//Remover Venta
router.delete("/:id", auth, VentaController.deleteVenta);
//buscar venta por nombre de cliente
router.get("/:name", VentaController.findVenta);

module.exports = router;