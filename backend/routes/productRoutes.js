import express from "express";
import { createProduct, deletProduct, updateProduct } from "../controllers/productControllers.js";


const router = express.Router();


router.post("/createproduct", createProduct);
router.put("/updateproduct", updateProduct);
router.delete("/deletprodcut",deletProduct);


export default router;