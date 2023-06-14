const {HttpError} = require("../../helpers");
const {Todos} = require("../../models/todos");

const removeTodo = async (req, res) => {
  const {id} = req.params;
  const removeTodo = await Todos.findByIdAndRemove(id);

  if (!removeTodo) {
    throw HttpError(404, `Not found Todo ID: ${id}`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Todo deleted successfully",
    todo: removeTodo,
  });
};
module.exports = removeTodo;
