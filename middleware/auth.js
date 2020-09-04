const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Obtener el token del header
  const token = req.header("x-auth-token");

  //Chequear si no hay token
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Token no encontrado, autorización denegada" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
  }
};
