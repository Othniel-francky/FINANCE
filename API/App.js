import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("mon server a bien a demarer sur le port 3000");
})