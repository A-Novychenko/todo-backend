const Joi = require("joi");
const {model, Schema} = require("mongoose");

const todosSchema = new Schema(
  {
    title: {
      type: String,
      default: Date.now().toString(),
    },
    description: {
      type: String,
      required: [true, "Write something"],
    },
    status: {
      type: String,
      enum: ["normal", "important", "completed"],
      default: "normal",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {versionKey: false, timestamps: true}
);

const Todos = model("todo", todosSchema);

const addTodoSchema = Joi.object({
  description: Joi.string()
    .min(1)
    .max(1000)
    .required()
    .messages({"any.required": "missing required field description"}),
  title: Joi.string().min(1).max(100),
  status: Joi.string().valid("normal", "important", "completed").messages({
    "any.required":
      "the field 'status' does not match the values ['normal', 'important', 'completed']",
  }),
});

const updTodoSchema = Joi.object({
  description: Joi.string().min(1).max(1000),
  title: Joi.string().min(1).max(100),
});

const updStatusTodoSchema = Joi.object({
  status: Joi.string()
    .valid("normal", "important", "completed")
    .required()
    .messages({
      "any.required":
        "the required field 'status' is missing or does not match the values ['normal', 'important', 'completed']",
    }),
});

const todosJoiSchemas = {addTodoSchema, updTodoSchema, updStatusTodoSchema};

module.exports = {Todos, todosJoiSchemas};
