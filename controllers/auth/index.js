const {ctrlWrap} = require("../../helpers");

const register = require("./register");
const verifyEmail = require("./verifyEmail");

module.exports = {
  register: ctrlWrap(register),
  verifyEmail: ctrlWrap(verifyEmail),
};
