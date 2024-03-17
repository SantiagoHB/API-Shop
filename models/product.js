// Se importa la librería mongoose, que es un ODM (Object Data Modeling) para trabajar con MongoDB.
const mongoose = require("mongoose");

// Se define un esquema para el modelo de 'Product' utilizando la función 'Schema' de mongoose.
// Este esquema define la estructura de los documentos dentro de la colección 'Product' en MongoDB.
const productSchema = new mongoose.Schema({
  // El campo 'name' es de tipo String y almacenará el nombre del producto.
  name: String,
  // El campo 'inStock' es de tipo Boolean y almacenará un valor verdadero o falso dependiendo si el producto está en stock.
  inStock: Boolean,
  // El campo 'price' es de tipo Number y almacenará el precio del producto.
  price: Number,
});

// Se exporta el modelo 'Product' para poder ser utilizado en otras partes del proyecto.
// 'mongoose.model' compila el esquema en un modelo; un modelo es una clase con la cual se construyen los documentos de MongoDB.
module.exports = mongoose.model("Product", productSchema);
