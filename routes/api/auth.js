const express = require("express");
const {register} = require("../../controllers/auth");
const router = express.Router();

const validateBody = require("../../middlewares/validateBody");
const {authSchemas} = require("../../models/auth");

router.post("/register", validateBody(authSchemas.singupSchema), register);
router.post("/login");
router.get("/verify/:verifyCode");
router.post("/verify");

router.get("/current");
router.get("/logout");

module.exports = router;
