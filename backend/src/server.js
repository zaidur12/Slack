import express from "express"
import { ENV } from "../src/config/env.js"
import { connectDB } from "./config/db.js";

const app = express();



app.get("/",(req,res)=>{
    res.send("hello ZR")
})

app.listen(ENV.PORT, ()=>{
    console.log("Server is running",ENV.PORT)
    connectDB()
})