const express = require("express");
const router = express.Router();

//@route    GET api/contacts
//@desc     Obtener todos los contactos del usuario
//@access   Private

router.get("/", (req, res) => {
  res.send("Obtener todos los contactos");
});

//@route    POST api/contacts
//@desc     Agregar un contacto
//@access   Private

router.post("/", (req, res) => {
  res.send("Agregar un contacto");
});

//@route    PUT api/contacts/:id
//@desc     Actualizar contacto
//@access   Private

router.put("/:id", (req, res) => {
  res.send("Actualizar contacto");
});

//@route    DELETE api/contacts/:id
//@desc     Borrar contacto
//@access   Private

router.delete("/:id", (req, res) => {
  res.send("Borrar contacto");
});

module.exports = router;
