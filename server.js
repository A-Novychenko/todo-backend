const express = require("express");
require("dotenv").config();

const app = express();
const {PORT = 3001} = process.env;

app.listen(3000, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
