const express = require("express");

const router = express.Router();

const {authenticate, validateBody} = require("../../middlewares");
const {getAllTodos, addTodo, updateTodo} = require("../../controllers/todos");

/////////////////
/////////////////

// validateBody

////////////////
////////////////

router.get("/", authenticate, getAllTodos);
router.post("/", authenticate, addTodo);
router.patch("/:id", authenticate, updateTodo);

module.exports = router;
