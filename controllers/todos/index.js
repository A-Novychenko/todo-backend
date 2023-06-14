const {ctrlWrap} = require("../../helpers");

const getAllTodos = require("./getAllTodos");
const addTodo = require("./addTodo");
const updateTodo = require("./updateTodo");
const updateStatus = require("./updateStatus");
const removeTodo = require("./removeTodo");
const deleteAllTodos = require("./deleteAllTodos");

module.exports = {
  getAllTodos: ctrlWrap(getAllTodos),
  addTodo: ctrlWrap(addTodo),
  updateTodo: ctrlWrap(updateTodo),
  updateStatus: ctrlWrap(updateStatus),
  removeTodo: ctrlWrap(removeTodo),
  deleteAllTodos: ctrlWrap(deleteAllTodos),
};
