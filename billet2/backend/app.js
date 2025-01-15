import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import cors from "cors"; 
import productsRouter from "./src/routes/productsRouter.js";


const port = process.env.PORT || 5001 

const app = express();
app.use(express.json());
// app.use(cors());
app.use("/api/products", productsRouter);



app.get("/",(req,res)=>{
    res.send("salam qqardasssss")
})

app.listen(port,()=>{
    console.log(`server connect ${`http://localhost:${port}`}`)
})