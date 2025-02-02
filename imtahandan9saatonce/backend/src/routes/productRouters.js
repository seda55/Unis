import express from 'express'
import { addProduct, deleteProduct, getProduct } from '../controllers/productsController.js'


const router = express.Router()


router.get("/", getProduct),
router.post("/",addProduct),
router.delete("/:id", deleteProduct)


export default router;