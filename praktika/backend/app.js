import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import productRouter from "../backend/src/routes/productsRoute.js";
import cors from "cors"; 


const port = process.env.PORT || 5001 ;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productRouter);

app.get("/",(req,res)=>{
res.send("hello bro");
});


app.listen(port,()=>{
    console.log(`server running ${`http://localhost:${port}`}`)
})