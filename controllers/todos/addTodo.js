const {Todos} = require("../../models/todos");

const addTodo = async (req, res) => {
  const {_id: owner} = req.user;
  // const data = req.body;

  const todo = await Todos.create({...req.body, owner});

  const todoToResp = {
    _id: todo._id,
    title: todo.title,
    description: todo.description,
    status: todo.status,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
  };

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Todo received successfully",
    todo: todoToResp,
  });
};

module.exports = addTodo;
