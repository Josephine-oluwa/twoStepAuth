import express, { Application } from "express";

import { mainApp } from "./mainApp";
import Db from "./config/Db";



const app : Application = express()
// const port = parseInt(process.env.PORT!)
const port: number = 3344

mainApp(app)
const server = app.listen(port, ()=>{
    Db()
})

process.on("uncaughtException", (err : any) =>{
    console.log("server is shutting down for due to uncaughtException", err);
    
    process.exit(1)
})

process.on("unhandledRejection", (reason : any) =>{
    console.log("server is shutting down for due to unhandledRejection", reason);
    
    server.close(()=>{
        process.exit(1)
    })
})