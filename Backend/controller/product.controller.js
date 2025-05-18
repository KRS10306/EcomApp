import { Product } from "../models/product.model.js"

export const findProducts = async(req,res) =>{
    const products = await Product.find()

    if (!products){
        return res.status(200).json({success:false, message: "no products found", status:404})
    }

    return res.status(200).json({success:true, message: "products found", status:200, products})
}