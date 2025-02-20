import { createOrder, getAllOrders } from "../controllers/orderController.js";
import express from 'express'
import checkIsAdmin from "../midddleware/isAdmin.js";

const orderRouter = express.Router();

orderRouter.post("/create-order", createOrder);
orderRouter.get("/get-all-orders", checkIsAdmin, getAllOrders);

export default orderRouter