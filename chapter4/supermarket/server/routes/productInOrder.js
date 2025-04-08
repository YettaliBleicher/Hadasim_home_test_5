import express from "express";
import { ProductInOrder } from "../controller/productInOrder.js"

const productInOrderRouter = express.Router();
const ProductInOrderController = new ProductInOrder();

productInOrderRouter.get("/productInOrder/:orderId", ProductInOrderController.getById);
// supplierRouter.post("/", SupplierController.add);
// supplierRouter.put("/supplier/:supplierId", SupplierController.update);
// supplierRouter.delete("/supplier/:supplierId", SupplierController.delete);


export { productInOrderRouter }
