const { loginService } = require('../services');

const checkValidationCont = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.checkValidationServ(email, password);
  res.status(status).json(data);
};

module.exports = {
  checkValidationCont,
};