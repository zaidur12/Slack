import express from "express"
import { ENV } from "../src/config/env.js"

const app = express();



app.get("/",(req,res)=>{
    res.send("hello ZR")
})

app.listen(ENV.PORT, ()=>{
    console.log(ENV.MONGO_URI)
    console.log("Server is running",ENV.PORT)
})