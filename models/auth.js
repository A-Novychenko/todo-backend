const {Schema, model} = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyCode: {
      type: String,
      default: "",
    },
  },
  {versionKey: false, timestamps: true}
);

const registerSchema = Joi.object({
  login: Joi.string()
    .min(6)
    .required()
    .messages({"any.required": "missing required field login"}),
  email: Joi.string()
    .required()
    .email()
    .messages({"any.required": "missing required field email"}),
  password: Joi.string()
    .min(6)
    .required()
    .messages({"any.required": "missing required field password"}),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string()
    .required()
    .email()
    .messages({"any.required": "missing required field email"}),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .email()
    .messages({"any.required": "missing required field email"}),
  password: Joi.string()
    .min(6)
    .required()
    .messages({"any.required": "missing required field password"}),
});

const authSchemas = {registerSchema, verifyEmailSchema, loginSchema};

const User = model("user", userSchema);

module.exports = {
  User,
  authSchemas,
};
