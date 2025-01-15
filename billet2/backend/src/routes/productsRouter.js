import express from "express"

import {
    addProduct,
    getProducts,
    deleteProduct,
} from "../controllers/productsController.js"



const productsRouter = express.Router();

productsRouter.post("/",addProduct)
productsRouter.get("/",getProducts)
productsRouter.delete("/:id",deleteProduct)




export default productsRouter;