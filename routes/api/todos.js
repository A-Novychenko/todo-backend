const express = require("express");

const router = express.Router();

const {authenticate, validateBody} = require("../../middlewares");
const {
  getAllTodos,
  addTodo,
  updateTodo,
  updateStatus,
  removeTodo,
  deleteAllTodos,
} = require("../../controllers/todos");

/////////////////
/////////////////

// validateBody

////////////////
////////////////

router.get("/", authenticate, getAllTodos);
router.post("/", authenticate, addTodo);
router.patch("/:id", authenticate, updateTodo);
router.patch("/:id/status", authenticate, updateStatus);
router.delete("/:id", authenticate, removeTodo);
router.get("/clean/collection", authenticate, deleteAllTodos);

module.exports = router;
