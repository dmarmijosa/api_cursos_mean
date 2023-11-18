import jwt from "jsonwebtoken";
import models from "../models";

const encode = async (_id, rol, email) => {
  const token = jwt.sign(
    {
      _id,
      rol,
      email,
    },
    process.env.KEY_PUBLIC,
    { expiresIn: "1d" }
  );
  return token;
};

const decode = async (token) => {
  try {
    const { _id } = await jwt.verify(token, process.env.KEY_PUBLIC);
    const user = await models.User.findOne({ _id });
    return user ? true : false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = {
  encode,
  decode,
};
