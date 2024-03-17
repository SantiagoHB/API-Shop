// Se requiere la biblioteca de mongoose para interactuar con MongoDB.
const mongoose = require("mongoose");

// Se crea un nuevo esquema utilizando el constructor Schema de mongoose.
// Este esquema define la estructura de los documentos en la colección de ClientPrice en MongoDB.
const clientPriceSchema = new mongoose.Schema({
  // 'userId' es un campo que almacena un identificador único para el usuario, del tipo ObjectId,
  // que es un tipo de dato especial de MongoDB para identificadores únicos.
  userId: mongoose.Schema.Types.ObjectId,
  // 'productName' es un campo de tipo String que almacena el nombre del producto.
  productName: String,
  // 'specialPrice' es un campo de tipo Number que almacena el precio especial que se ofrece a ese usuario para ese producto.
  specialPrice: Number,
});

// Se exporta el modelo 'ClientPrice' compilando el esquema en un modelo.
// Esto permite que el esquema se use para crear y manejar documentos en la colección 'ClientPrice'.
module.exports = mongoose.model("ClientPrice", clientPriceSchema);
