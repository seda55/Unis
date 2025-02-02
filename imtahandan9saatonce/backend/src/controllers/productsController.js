import  {Product} from "../models/productsModel.js";

export const getProduct = async(req,res)=>{
    try{
        const products = await Product.find()
    res.status(200).send(products)
    }catch(error){
        res.status(500)
        console.log(error)
    }
}

export const addProduct = async(req,res)=>{
    try{
        const newProduct = await Product(req.body)
        await newProduct.save();
        res.status(201).send(newProduct)
    }catch(error){
        res.status(500)
        console.log(error)
    }
}


export const deleteProduct = async(req,res)=>{
    try{
        const deletData  =  await Product.findByIdAndDelete(req.params.id)
        if(!deletData){
            res.status(404).send("not found product")
        }
        res.send(200)

    }catch(error){
        res.status(500)
        console.log(error)
    }
}