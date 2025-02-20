import express from 'express'
import { AddProduct, deleteProduct, getAllProducts } from '../controllers/productController.js'
import checkIsAdmin from '../midddleware/isAdmin.js';
import authenticateUser from '../midddleware/authenticateUser.js';

const productRouter = express.Router()

productRouter.get('/get-product', getAllProducts)
productRouter.post('/delete-product/:id',authenticateUser ,checkIsAdmin,deleteProduct);
productRouter.post("/add-product", authenticateUser, checkIsAdmin, AddProduct);

export default productRouter