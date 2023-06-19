const axios = require("axios");
const server = require("./src/server");
const PORT = 3001;
const { sequelize } = require ("./src/db.js");


server.listen(PORT, async () => {
  await sequelize.sync({ force: true });
  console.log(`Server listening on port ${PORT}`);
});

