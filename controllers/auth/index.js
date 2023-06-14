const {ctrlWrap} = require("../../helpers");

const register = require("./register");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail ");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");

module.exports = {
  register: ctrlWrap(register),
  verifyEmail: ctrlWrap(verifyEmail),
  resendVerifyEmail: ctrlWrap(resendVerifyEmail),
  login: ctrlWrap(login),
  getCurrent: ctrlWrap(getCurrent),
  logout: ctrlWrap(logout),
};
