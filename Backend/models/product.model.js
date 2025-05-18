import mongoose from "mongoose";

const productSchema = new mongoose.Schema({}, {strict: false, collection: "product"})

export const Product =  mongoose.model("Product", productSchema)