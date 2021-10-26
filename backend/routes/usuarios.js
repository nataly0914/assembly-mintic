const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");

//lista los usuarios
router.get("", UsuarioController.getUsuario);
//crea los usuarios
router.post("", UsuarioController.addUsuario);
router.get("/rol", UsuarioController.getUsuarioVendedor);
//busca los usuarios por id
router.get("/:id", UsuarioController.getUsuarioId);
//actualizar los usuarios por id
router.put("/:id", UsuarioController.editUsiario);
//eliminar los usuarios por id
router.delete("/:id", UsuarioController.deleteUsuario);

//importar auth

const auth = require ("../middleware/auth");
const UserController = require("../controllers/users");


router.get("",auth, UserController.GetUser);
router.get("/validarAdmin",auth, UserController.ValidarAdmin);

module.exports = router;