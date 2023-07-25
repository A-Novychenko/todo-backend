const express = require("express");
const router = express.Router();

const {
  register,
  verifyEmail,
  resendVerifyEmail,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");

const {validateBody, authenticate} = require("../../middlewares");
const {authSchemas} = require("../../models/auth");

router.post("/register", validateBody(authSchemas.registerSchema), register);
router.get("/verify/:verifyCode", verifyEmail);
router.post(
  "/verify",
  validateBody(authSchemas.verifyEmailSchema),
  resendVerifyEmail
);
router.post("/login", validateBody(authSchemas.loginSchema), login);
router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);

module.exports = router;
