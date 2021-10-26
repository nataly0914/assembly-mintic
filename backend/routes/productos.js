//usar router de express

//importar express
const express = require("express");
const router = express.Router();
//importar auth

const auth = require ("../middleware/auth");
const ProductController = require("../controllers/productos");

//lista todos los productos
router.get("", ProductController.getProducts);
//crea los productos
router.post("",auth, ProductController.addProduct);
// //lista los productos disponibles
// router.get("/disponibles", ProductController.getProductoDisponible);
//busca los productos  por id
router.get("/:id", ProductController.getProductId);
//actualizar producto
router.put("/:id",auth, ProductController.editProduct);
//remover producto
router.delete("/:id",auth, ProductController.deleteProducto);

//buscar producto por nombre
router.get("/:name", ProductController.findProduct);


//router.get("/entire/:id", ProductController.getProductIdLazyLoading);

module.exports = router;