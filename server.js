const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

require("dotenv").config();

const app = express();
const {PORT = 3001, DB_HOST} = process.env;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

const authRouter = require("./routes/api/auth");
const todosRouter = require("./routes/api/todos");

app.use("/api/users", authRouter);
app.use("/api/todos", todosRouter);

app.use((_, res, __) => {
  res.status(404).json({
    status: error,
    code: 404,
    message: "Use api on routes: /api/todos",
    data: "Not found",
  });
});

const {createErrorReq} = require("./helpers");
app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  const {statusText, codeErr, messageDescr, dataDescr} = createErrorReq(
    status,
    message
  );

  res.status(status).json({
    status: statusText,
    code: codeErr,
    message: messageDescr,
    data: dataDescr,
  });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(`Database connection successful`);
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
