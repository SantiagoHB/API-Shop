// Importamos los modelos Product y ClientPrice, que representan esquemas de la base de datos.
const Product = require("../models/product");
const ClientPrice = require("../models/clientPrice");

// Exportamos un método asincrónico llamado getInStockProducts.
exports.getInStockProducts = async (req, res) => {
  try {
    // Buscamos en la base de datos todos los productos que estén marcados como en stock (inStock: true).
    const inStockProducts = await Product.find({ inStock: true });
    // Respondemos a la solicitud HTTP con un JSON que contiene los productos en stock.
    res.json(inStockProducts);
  } catch (error) {
    // Si ocurre un error en la consulta a la base de datos, respondemos con un estado HTTP 500 y enviamos el error.
    res.status(500).send(error);
  }
};

// Exportamos otro método asincrónico llamado getPrice.
exports.getPrice = async (req, res) => {
  // Extraemos user_id y nombre_producto de los parámetros de la ruta de la solicitud.
  const { user_id, nombre_producto } = req.params;

  try {
    // Buscamos un único producto por su nombre en la base de datos.
    const product = await Product.findOne({ name: nombre_producto });
    // Si el producto no se encuentra, respondemos con un estado HTTP 404 y un mensaje de error.
    if (!product) {
      return res.status(404).send("Product not found");
    }

    // Buscamos un precio especial en la base de datos que coincida con el ID del usuario y el nombre del producto.
    const specialPrice = await ClientPrice.findOne({
      userId: user_id,
      productName: nombre_producto,
    });

    // Determinamos el precio a responder: si hay un precio especial, lo usamos; si no, usamos el precio base del producto.
    const price = specialPrice ? specialPrice.specialPrice : product.price;
    // Respondemos con el precio en formato JSON.
    res.json({ price });
  } catch (error) {
    // Si ocurre un error durante la consulta, respondemos con un estado HTTP 500 y enviamos el error.
    res.status(500).send(error);
  }
};
