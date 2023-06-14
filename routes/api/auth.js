const express = require("express");
const router = express.Router();

const {
  register,
  verifyEmail,
  resendVerifyEmail,
  login,
} = require("../../controllers/auth");

const {validateBody} = require("../../middlewares");
const {authSchemas} = require("../../models/auth");

router.post("/register", validateBody(authSchemas.registerSchema), register);
router.post("/login", login);
router.get("/verify/:verifyCode", verifyEmail);
router.post("/verify", resendVerifyEmail);

router.get("/current");
router.get("/logout");

module.exports = router;
