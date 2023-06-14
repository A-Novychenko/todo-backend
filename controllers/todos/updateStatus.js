const {HttpError} = require("../../helpers");
const {Todos} = require("../../models/todos");

const updateStatus = async (req, res) => {
  const {id} = req.params;
  const todo = await Todos.findByIdAndUpdate(id, req.body, {
    new: true,
    select: "-owner",
  });

  if (!todo) {
    throw HttpError(404, `Not found Todo ID: ${id}`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Todo status updated successfully",
    todo,
  });
};
module.exports = updateStatus;
