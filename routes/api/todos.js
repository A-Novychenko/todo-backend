const express = require("express");

const router = express.Router();

const {authenticate, validateBody, isValidId} = require("../../middlewares");
const {
  getAllTodos,
  addTodo,
  updateTodo,
  updateStatus,
  removeTodo,
  deleteAllTodos,
} = require("../../controllers/todos");
const {todosJoiSchemas} = require("../../models/todos");

router.get("/", authenticate, getAllTodos);
router.post(
  "/",
  authenticate,
  validateBody(todosJoiSchemas.addTodoSchema),
  addTodo
);
router.patch(
  "/:id",
  authenticate,
  isValidId,
  validateBody(todosJoiSchemas.updTodoSchema),
  updateTodo
);
router.patch(
  "/:id/status",
  authenticate,
  isValidId,
  validateBody(todosJoiSchemas.updStatusTodoSchema),
  updateStatus
);
router.delete("/:id", authenticate, isValidId, removeTodo);
router.get("/clean/collection", authenticate, deleteAllTodos);

module.exports = router;
