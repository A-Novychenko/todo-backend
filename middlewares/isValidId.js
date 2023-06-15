const {isValidObjectId} = require("mongoose");
const {HttpError} = require("../helpers");

const isValidId = async (req, res, next) => {
  const {id} = req.params;

  if (!isValidObjectId(id)) {
    throw HttpError(404, "Bad request, ID is incorrect");
  }
};

module.exports = isValidId;
