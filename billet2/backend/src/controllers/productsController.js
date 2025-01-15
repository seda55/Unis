import mongoose from "mongoose";
import Product from "../models/productsModel.js";

export const addProduct = async(req,res) =>{
   try{
    const newProduct = new Product(req.body)

    await newProduct.save();

    return res
    .status(201)
    .json({succes:true , mesage: "product added succes "});
   }catch(error){
 return res 
 .status(500)
 .json({succes: false, message :" error "})
   }
};

export const getProducts = async (req,res )=>{
    try{
        const products = await Product.find();
        return res.status(200).json({succes: false, products})
    }catch(error){
        return res
        .status(500)
        .json({succes:false,message:'error'})
    }
};


export const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res
            .status(400)
            .json({succes:false,message:"error id "})
        }
        const  deleteProdct = await Product.findByIdAndDelete(id);

        if(!deleteProdct){
            return res
            .status(400)
            .json({succes:false,message:"not delet "})

        }else{
            return res 
            .status(200)
            .json({succes:true,message:"succces delet "})
        } 
    }catch(error){
        return res 
        .status(500)
        .json({succes:false , message:"server error "})
    } 
}
