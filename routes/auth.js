const express = require("express");
const router = express.Router();

//@route    GET api/auth
//@desc     Conectar a un usuario
//@access   Private

router.get("/", (req, res) => {
  res.send("Conectar un usuario");
});

//@route    POST api/auth
//@desc     Autorizar a un usuario y obtener token
//@access   Public

router.post("/", (req, res) => {
  res.send("Autorizar la conexión de un usuario");
});

module.exports = router;
