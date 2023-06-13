const {HttpError} = require("../../helpers");
const {User} = require("../../models/auth");

const verifyEmail = async (req, res) => {
  const {verifyCode} = req.params;

  const user = await User.findOne({verifyCode});

  if (!user) {
    throw HttpError(404, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {verifyCode: null, verify: true});

  res.json({
    status: "OK",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = verifyEmail;
