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
});

const todosJoiSchemas = {addTodoSchema};

module.exports = {Todos, todosJoiSchemas};
