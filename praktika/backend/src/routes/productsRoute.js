import express from "express";
import {addProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct,} from "../controllers/productsController.js"


const productRoute = express.Router();


productRoute.post("/", addProduct);
productRoute.get("/", getProducts);
productRoute.get("/:id", getProductById);
productRoute.delete("/:id", deleteProduct);
productRoute.put("/:id", updateProduct);


export default productRoute;