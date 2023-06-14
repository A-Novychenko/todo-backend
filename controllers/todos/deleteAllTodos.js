const {Todos} = require("../../models/todos");

const deleteAllTodos = async (req, res) => {
  const result = await Todos.deleteMany({});
  console.log("result", result);

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Collection 'TODOS' deleted successfully",
    todos: [],
  });
};
module.exports = deleteAllTodos;
