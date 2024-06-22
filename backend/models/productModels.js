import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
     name:{
          type: String,
          required: true
     },
     price: {
          type: Number,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     productImage: {
          public_id: {
          type: String,
          required: true
     },
     url: {
          type: String,
          required: true
     }
     },
     category:{
          type: String,
          required: true
     }
});

export const Product = mongoose.model("Product", productSchema)