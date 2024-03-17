<<<<<<< HEAD
// Requiere y configura las variables de entorno desde un archivo .env.
require("dotenv").config();
// Importa Express, un framework de Node.js para construir aplicaciones web y APIs.
const express = require("express");
// Importa Mongoose, una biblioteca de Node.js para trabajar con MongoDB.
const mongoose = require("mongoose");
// Importa las rutas de los productos definidas en otro archivo.
const productRoutes = require("./routes/productRoutes");

// Crea una instancia de una aplicación Express.
const app = express();
// Define el puerto en el que se ejecutará el servidor, obteniéndolo de las variables de entorno o usando 3000 por defecto.
const PORT = process.env.PORT || 3000;

// Establece una conexión con la base de datos MongoDB, utilizando la URI definida en las variables de entorno.
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Utiliza el nuevo parser de URL de Mongoose para evitar advertencias de deprecación.
    useUnifiedTopology: true, // Usa la nueva gestión de la topología del motor de servidor para evitar advertencias de deprecación.
  })
  .then(() => console.log("MongoDB connected")) // Si la conexión es exitosa, imprime un mensaje en la consola.
  .catch((err) => console.log(err)); // Si hay un error al conectar, imprime el error en la consola.

// Configura la aplicación Express para parsear JSON en las solicitudes entrantes.
app.use(express.json());
// Define una ruta base '/api' para todas las rutas definidas en productRoutes.
app.use("/api", productRoutes);

// Inicia el servidor en el puerto definido y muestra un mensaje en la consola.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
=======
// Requiere y configura las variables de entorno desde un archivo .env.
require("dotenv").config();
// Importa Express, un framework de Node.js para construir aplicaciones web y APIs.
const express = require("express");
// Importa Mongoose, una biblioteca de Node.js para trabajar con MongoDB.
const mongoose = require("mongoose");
// Importa las rutas de los productos definidas en otro archivo.
const productRoutes = require("./routes/productRoutes");

// Crea una instancia de una aplicación Express.
const app = express();
// Define el puerto en el que se ejecutará el servidor, obteniéndolo de las variables de entorno o usando 3000 por defecto.
const PORT = process.env.PORT || 3000;

// Establece una conexión con la base de datos MongoDB, utilizando la URI definida en las variables de entorno.
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Utiliza el nuevo parser de URL de Mongoose para evitar advertencias de deprecación.
    useUnifiedTopology: true, // Usa la nueva gestión de la topología del motor de servidor para evitar advertencias de deprecación.
  })
  .then(() => console.log("MongoDB connected")) // Si la conexión es exitosa, imprime un mensaje en la consola.
  .catch((err) => console.log(err)); // Si hay un error al conectar, imprime el error en la consola.

// Configura la aplicación Express para parsear JSON en las solicitudes entrantes.
app.use(express.json());
// Define una ruta base '/api' para todas las rutas definidas en productRoutes.
app.use("/api", productRoutes);

// Inicia el servidor en el puerto definido y muestra un mensaje en la consola.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
>>>>>>> 4b39c4a (primer commit)
