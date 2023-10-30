import cors from "cors";
import express, { Application, Request, Response } from "express";
import user from "./Router/userRouter"

export const mainApp = (app : Application) =>{
    app.use(cors())
    app.use(express.json())

    app.use("/api", user)

    app.get("/", (req : Request, res : Response) =>{
        try {
            res.status(200).json({
                message : "Welcome"
            })
        } catch (error) {
            res.status(404).json({
                message : "Error"
            })
        }
    })
}