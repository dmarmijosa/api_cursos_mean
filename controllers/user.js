import models from "../models";
import bcrypt from "bcryptjs";
import token from "../helpers/token";

const register = async (req, res) => {
  try {
    const valid_user =  await models.User.findOne({email:req.body.email});
    if(valid_user){
      res.status(200).json({
        message:403,
        message_text: 'El usuario ya existe'
      })
      return;
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const User = await models.User.create(req.body);
    res.status(200).json({
      user: User,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Ocurrio un problema",
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await models.User.findOne({
      email: req.body.email,
      state: 1
    });
    if (user) {
      let compare = await bcrypt.compare(req.body.password, user.password);
      if (compare) {
        let tokenT = await token.encode(user._id, user.rol, user.email);
        const USER_BODY = {
          token: tokenT,
          user: {
            name: user.name,
            surname: user.surname,
            email: user.email,
          },
        };
        res.status(200).json({
          USER: USER_BODY,
        });
      } else {
        res.status(500).send({
          message: "El usuario Ingresado no existe",
        });
      }
    } else {
      res.status(500).send({
        message: "El usuario ingresado no existe",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Hubo un error",
    });
  }
};
const login_admin = async (req, res) => {
  try {
    const user = await models.User.findOne({
      email: req.body.email,
      state: 1,
      role:'admin'
    });
    if (user) {
      let compare = await bcrypt.compare(req.body.password, user.password);
      if (compare) {
        let tokenT = await token.encode(user._id, user.rol, user.email);
        const USER_BODY = {
          token: tokenT,
          user: {
            name: user.name,
            surname: user.surname,
            email: user.email,
          },
        };
        res.status(200).json({
          USER: USER_BODY,
        });
      } else {
        res.status(500).send({
          message: "El usuario Ingresado no existe",
        });
      }
    } else {
      res.status(500).send({
        message: "El usuario ingresado no existe",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Hubo un error",
    });
  }
};

module.exports = {
  register,
  login,
  login_admin
};
