const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const server = express();


//middlewares
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');next();});

server.use(morgan("dev"));
server.use(express.json());   //funcion de parseo
server.use(cors());
server.use("/countries", router);
server.use(router);  //CONFIGURAMOS NUESTRO ROUTER PRINCIPAL.  punto de entrada al localhost => /routes/index  

module.exports = server;

//en SERVER IMPORTAMOS A  EXPRESS PARA DESPES CONFIGURAR NUESTROS MIDDELWARES QUE VAMOS A UTILIZAR DURANTE EL PROYECTO, UNO  DE ELLOS ES "MORGAN" (ES EL QUE SE ENCARGA CADA VEZ QUE HAGO UNA REQUEST NOS ARROJA X TERMINAL UN CODIGO Y STATUS DE LA REQUEST ENDPOINT Y DATOS DEL TIEMPO )

// Este código representa la configuración y la creación de un servidor de Express en Node.js. Aquí se importan y utilizan varios módulos y se configura el servidor para manejar solicitudes HTTP.

// Vamos a analizar cada parte del código:

// 1. `const express = require("express");`: Importa el módulo Express, que es un framework web de Node.js que simplifica el manejo de rutas, middleware y solicitudes HTTP.

// 2. `const router = require("./routes");`: Importa el archivo de rutas del proyecto. Las rutas se definen en otro archivo para mantener el código organizado y modular.

// 3. `const morgan = require("morgan");`: Importa el módulo Morgan, que es un middleware de registro de solicitudes HTTP. Se utiliza aquí para imprimir información de registro en la consola durante el desarrollo.

// 4. `const cors = require("cors");`: Importa el módulo Cors, que es otro middleware utilizado para habilitar la política de intercambio de recursos entre dominios (CORS). Esto permite que el servidor responda a solicitudes HTTP desde otros dominios o puertos.

// 5. `const server = express();`: Crea una instancia del servidor Express.

// 6. `server.use(morgan("dev"));`: Registra el middleware Morgan para imprimir información de registro en la consola durante el desarrollo. El parámetro "dev" configura el formato del registro.

// 7. `server.use(express.json());`: Configura el middleware incorporado de Express llamado `express.json()` para analizar el cuerpo de las solicitudes entrantes en formato JSON. Esto permite que el servidor interprete los datos enviados en las solicitudes POST o PUT.

// 8. `server.use(cors());`: Habilita el middleware Cors para permitir el intercambio de recursos entre dominios o puertos diferentes al del servidor. Esto es útil cuando el cliente y el servidor se ejecutan en diferentes dominios o puertos.

// 9. `server.use(router);`: Registra el archivo de rutas importado (`./routes`) como middleware en el servidor. Esto permite que el servidor maneje las rutas definidas en ese archivo.

// 10. `module.exports = server;`: Exporta el servidor creado para que pueda ser utilizado en otros archivos del proyecto.

// En resumen, este código configura un servidor Express, registra middleware como Morgan y Cors, y define las rutas a través del archivo de rutas. Es un punto de entrada común para la configuración y la creación del servidor en una aplicación de Node.js con Express.