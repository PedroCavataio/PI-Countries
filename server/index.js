const axios = require("axios");
const server = require("./src/server");
const PORT = process.env.PORT || 3001;
const { sequelize } = require ("./src/db.js");
const { Country } = require("./src/models/Country");
const fetchAndSaveCountries = require('./src/importData'); // Importa la función para obtener y guardar los países


server.listen(PORT, async () => {
  await sequelize.sync({ force: true });
  console.log(`Server listening on port ${PORT}`);

  fetchAndSaveCountries();
  });













  


// Este código representa la configuración y el arranque del servidor en una aplicación Node.js con Express. A continuación, se explica cada parte del código:

// 1. `const axios = require("axios");`: Importa el módulo Axios, que es una biblioteca popular de Node.js utilizada para hacer solicitudes HTTP a servidores externos.

// 2. `const server = require("./src/server");`: Importa el archivo del servidor Express que contiene la configuración del servidor y las rutas.

// 3. `const PORT = 3001;`: Establece el número de puerto en el que se ejecutará el servidor. En este caso, se utiliza el puerto 3001.

// 4. `const { sequelize } = require("./src/db.js");`: Importa el objeto `sequelize` desde el archivo `db.js` en la carpeta `src`. Este objeto `sequelize` es una instancia de Sequelize, un ORM (Object-Relational Mapping) que permite interactuar con la base de datos.

// 5. `server.listen(PORT, async () => {`: Inicia el servidor Express y lo hace escuchar en el puerto especificado.

// 6. `await sequelize.sync({ force: true });`: Sincroniza el modelo definido con la base de datos. El método `sync()` de Sequelize crea o modifica las tablas en la base de datos según el modelo definido en la aplicación. El parámetro `{ force: true }` indica que se eliminarán las tablas existentes y se volverán a crear desde cero. Ten en cuenta que esto puede borrar los datos existentes en la base de datos.

// 7. `console.log(`Server listening on port ${PORT}`);`: Muestra un mensaje en la consola indicando que el servidor está escuchando en el puerto especificado.

// En resumen, este código importa el servidor Express, configura el puerto en el que se ejecutará el servidor, sincroniza el modelo con la base de datos y finalmente inicia el servidor en el puerto especificado.