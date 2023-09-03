const users = require('../utils/users');

const authenticate = (nombre, estacion) => {
  let access = false;
  users.forEach(user => {
    if (user.estacion === estacion) {
      access = true;
    }
  });
  return access;
};

module.exports = { authenticate };
