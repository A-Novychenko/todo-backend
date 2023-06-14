const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {HttpError} = require("../../helpers");
const {User} = require("../../models/auth");

const {SECRET_KEY} = process.env;

const login = async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  if (!user.verify) {
    throw HttpError(401, "Email not verified");
  }

  const passCompare = bcrypt.compare(password, user.password);

  if (!passCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: "23h"});

  await User.findByIdAndUpdate(user._id, {token});

  res.json({
    status: "OK",
    code: 200,
    message: "User is login",
    data: {
      token,
      user: {email, login: user.login},
    },
  });
};

module.exports = login;
