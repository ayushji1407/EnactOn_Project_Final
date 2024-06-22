import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbconnection } from "./database/dbconnection.js";
import productRouter from "./routes/productRoutes.js"
import { errorMiddleware } from "./middleware/error.js";


const app = express();
dotenv.config({path: './config.env'})


app.use(cors({
     // origin: [process.env.FRONTEND_URL],
     methods: ['GET','PUT','DELET','POST'],
     credentials: true,
}));


app.use("/api/products", productRouter)

app.listen(process.env.PORT,()=>{
     console.log(`Serevr is Running on Port ${process.env.PORT}`)
})

dbconnection();

app.use(errorMiddleware);