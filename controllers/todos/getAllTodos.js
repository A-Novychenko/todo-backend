const {Todos} = require("../../models/todos");

const getAllTodos = async (req, res) => {
  const {_id: owner} = req.user;
  const {page = 1, limit = 10, status} = req.query;

  const skip = (page - 1) * limit;
  const filterStatus = status === undefined ? null : {status};

  const todos = await Todos.find({owner, ...filterStatus}, "-owner", {
    skip,
    limit,
  });

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Todos received successfully",
    todos,
  });
};
module.exports = getAllTodos;
