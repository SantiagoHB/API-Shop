// Se importa el módulo 'express', que es el framework utilizado para crear el servidor HTTP.
const express = require("express");
// Se importa 'productController', que es un módulo que contiene la lógica de controlador para las rutas de productos.
const productController = require("../controllers/productController");

// Se crea un nuevo objeto 'router' utilizando el método 'Router' de Express. Este objeto se utiliza para definir rutas.
const router = express.Router();

// Se define una ruta GET en la dirección '/products'.
// Cuando se hace una solicitud GET a esta ruta, se ejecutará el método 'getInStockProducts' del 'productController'.
router.get("/products", productController.getInStockProducts);

// Se define otra ruta GET, esta vez con parámetros en la URL: 'user_id' y 'nombre_producto'.
// Los parámetros son marcados con dos puntos (:) indicando que son variables.
// Las solicitudes GET a esta ruta ejecutarán el método 'getPrice' del 'productController',
// pasando los valores de 'user_id' y 'nombre_producto' como argumentos.
router.get("/price/:user_id/:nombre_producto", productController.getPrice);

// Se exporta el objeto 'router' para que pueda ser utilizado por otros archivos en la aplicación,
// como el archivo principal que configura el servidor.
module.exports = router;
