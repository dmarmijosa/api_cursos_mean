import token from "../helpers/token";
const verifyTienda = async (req, res, next) => {
  if (!req.headers.token) {
    res.status(404).send({
      message: "NO SE ENVIO EL TOKEN",
    });
  }
  const response = await token.decode(req.headers.token);
  if (response) {
    if (response.rol == "cliente" || response.rol == "admin") {
      next();
    } else {
      res.status(403).send({
        message: "NO ESTA PERMITIDO VISTAR ESTA PAGINA",
      });
    }
  } else {
    res.status(403).send({
      message: "EL TOKEN ES INVALIDO",
    });
  }
};
const verifyAdmin = async (req, res, next) => {
  if (!req.headers.token) {
    res.status(404).send({
      message: "NO SE ENVIO EL TOKEN",
    });
  }
  const response = await token.decode(req.headers.token);
  if (response) {
    if (response.rol == "admin") {
      next();
    } else {
      res.status(403).send({
        message: "NO ESTA PERMITIDO VISTAR ESTA PAGINA",
      });
    }
  } else {
    res.status(403).send({
      message: "EL TOKEN ES INVALIDO",
    });
  }
};
module.exports = {
  verifyTienda,
  verifyAdmin,
};
