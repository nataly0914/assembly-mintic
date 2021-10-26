const Usuario = require("../models/user");

exports.getUsuario = (req, res) => {
  Usuario.find().then((postResult) => {
    res.status(200).json(postResult);
  })
};
//buscar usuario por id
exports.getUsuarioId = (req, res) => {
  Usuario.findById(req.params.id).then((usuarioResult) => {
    if (usuarioResult) {
      res.status(200).json(usuarioResult);
    } 
    else {
      res.status(404).json("Usuario no encontrado");
    }
  });
};
// crear usuario
exports.addUsuario = (req, res) => {
  const usuarioAdd = new Usuario({
    nombre: req.body.nombre,
    email: req.body.email,
    activo: req.body.activo,
    rol: req.body.rol,
   });

  usuarioAdd.save().then((createdUsuario) => {
    console.log(createdUsuario);
    res.status(201).json("Creado satisfactoriamente");
  });
};

//actualizar usuario
// exports.updateUsuario = (req, res) => {

//   const updateObjectUsuario = {

//       $set: {}

//   };

//   if(req.body.rol) {

//       updateObjectUsuario['$set']['rol'] = req.body.rol;

//   }
  
//   if(req.body.estado) {

//     updateObjectUsuario['$set']['estado'] = req.body.estado;

// }

//   Usuario.updateOne({id: req.body.id}, updateObjectUsuario).then((usuarioUpdate) => {
//     if (usuarioUpdate) {
//       res.status(200).json(usuarioUpdate);
//     } 
//     else {
//       res.status(404).json("Usuario  no encontrado");
//     }

//   })
// }
exports.editUsiario = (req, res) => {
  console.log("Editado");
  const id = req.params.id;

  const usuarioUpd = new Usuario({
    _id: id,
    nombre: req.body.nombre,
    email: req.body.email,
    activo: req.body.activo,
    rol: req.body.rol,
    
    
  });
  console.log(usuarioUpd);
  Usuario.findByIdAndUpdate(id, usuarioUpd).then((usuarioResult) => {
    res.status(200).json("Usuario actualizado satisfactoriamente");
  });
};

 exports.getUsuarioVendedor = (req, res) => {
  Usuario.find({ rol: "vendedor" }).then((usuarioResult) => {
     res.status(200).json(usuarioResult);
   });
 };

 exports.deleteUsuario = (req, res) => {
  console.log("Eliminado");
  const id = req.params.id;

  Usuario.deleteOne({_id: id}).then((usuarioResult) => {
    res.status(200).json("Usuario eliminado satisfactoriamente");
  });
}; 