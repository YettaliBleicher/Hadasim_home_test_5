import express from "express";
import { Order } from "../controller/order.js"

const orderRouter = express.Router();
const OrderController = new Order();

// supplierRouter.get("/supplier", SupplierController.getAll);
orderRouter.get("/order/:supplierId", OrderController.getBySupplierId);
orderRouter.put("/order/:orderId", OrderController.update);


export { orderRouter }