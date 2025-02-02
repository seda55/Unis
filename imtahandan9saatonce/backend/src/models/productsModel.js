import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    img:{type:String , required:true},
    title:{type:String , required:true} ,
    category: {type:String , required:true},
    price:{type:Number , required:true} ,
})


export const Product = mongoose.model("Product", productSchema)