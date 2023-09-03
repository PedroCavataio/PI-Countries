const loginController = require('../controllers/loginController');

  const loginFunc = (req, res) => {
  const { nombre, estacion } = req.query;
  const access = loginController.authenticate(nombre, estacion);
  return res.status(200).json({ access });
};

module.exports = { loginFunc };




