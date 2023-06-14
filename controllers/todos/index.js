const {ctrlWrap} = require("../../helpers");

const getAllTodos = require("./getAllTodos");
const addTodo = require("./addTodo");
const updateTodo = require("./updateTodo");

module.exports = {
  getAllTodos: ctrlWrap(getAllTodos),
  addTodo: ctrlWrap(addTodo),
  updateTodo: ctrlWrap(updateTodo),
};
