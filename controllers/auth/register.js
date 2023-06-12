const {User} = require("../../models/auth");

const register = async (req, res) => {
  const body = req.body;
  const user = await User.create(req.body);

  res.status(201).json({
    status: "succes",
    code: 201,
    message: "User registered!",
    data: user,
  });
};

module.exports = register;
