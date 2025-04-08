import express from "express";
import { Product } from "../controller/product.js"

const productRouter = express.Router();
const ProductController = new Product();

productRouter.get("/product", ProductController.getAll);
productRouter.get("/product/:productId", ProductController.getById);
productRouter.get("/products/:orderId", ProductController.getByOrderId);
productRouter.post("/product", ProductController.add);
// supplierRouter.put("/supplier/:supplierId", SupplierController.update);
// supplierRouter.delete("/supplier/:supplierId", SupplierController.delete);


export { productRouter }
