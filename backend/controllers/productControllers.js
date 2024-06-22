import { catchAsyncError } from "../middleware/catchAsyncError.js";
import  {Product}  from "../models/productModels.js";

export const createProduct = catchAsyncError(async (req, res) => {
     const { name, price, description, productImage, category } = req.body;
     const newProduct = new Product({ name, price, description, productImage, category });
     await newProduct.save();
     res.status(201).json({
         success: true,
         message: "Product Created Successfully"
     });
 });

 export const deletProduct = catchAsyncError(async(req,res) =>{
    const {name} = req.params;
    await Product.deleteOne(name);
    res.json({
        message: "Delet Product"
    })
 });

 export const updateProduct = catchAsyncError(async(req,res)=>{
  const {name, price, description} = req.params;
  const newUpdate = new Product({ name,price, description});
  await newUpdate.updateOne();
  res.status({
    success: true,
    message: "Product Update Successfully"
  })
 })