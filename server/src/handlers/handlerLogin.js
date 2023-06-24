const loginController = require('../controllers/loginController');

const loginFunc = (req, res) => {
  const { email, password } = req.query;
  const access = loginController.authenticate(email, password);

  return res.status(200).json({ access });
};

module.exports = { loginFunc };




