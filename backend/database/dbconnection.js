import mongoose from "mongoose";

export const dbconnection = () =>{
     mongoose.connect(process.env.MONGO_URI,{
          dbName: "MERN_PRODUCT"
     }).then(() =>{
          console.log("Database Connected to Successfully")
     }).catch((err) =>{
          console.log(`Some Error Occured: ${err}`)
     })
}