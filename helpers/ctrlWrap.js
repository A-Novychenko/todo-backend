const ctrlWrap = (ctrl) => {
  const wrap = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (e) {
      console.error(e);
      next(e);
    }
  };
  return wrap;
};

module.exports = ctrlWrap;
