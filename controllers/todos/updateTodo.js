const {HttpError} = require("../../helpers");
const {Todos} = require("../../models/todos");

const updateTodo = async (req, res) => {
  const {id} = req.params;
  const todo = await Todos.findByIdAndUpdate(id, req.body, {
    new: true,
    select: "_id title description status createdAt updatedAt",
  });

  if (!todo) {
    throw HttpError(404, `Not found todo id: ${id}`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Todo updated successfully",
    todo,
  });
};

module.exports = updateTodo;
