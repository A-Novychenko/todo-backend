const getCurrent = async (req, res) => {
  const {email, login} = req.user;

  res.json({
    status: "OK",
    code: 200,
    message: `Current user: ${login}`,
    data: {user: {email, login}},
  });
};

module.exports = getCurrent;
