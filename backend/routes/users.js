const express = require("express");
const router = express.Router();
//importar auth

const auth = require ("../middleware/auth");
const UserController = require("../controllers/users");


router.get("",auth, UserController.GetUser);
router.get("/validarAdmin",auth, UserController.ValidarAdmin);

module.exports = router;
